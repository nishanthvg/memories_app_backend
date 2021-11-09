import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import morgan from "morgan"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cors())
app.use(morgan("dev"));

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get("/", (req,res) => {
res.send("Hello welcome to Memories API")
})


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on server ${PORT}`);
    }))
    .catch((err) => {
        console.log(err.message)
     })
