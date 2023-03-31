import express from "express";
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import ConFigDb from "./config/db.js";
dotenv.config()
ConFigDb();
const app = express();
const port = 3000;
app.use(express.json())

app.use('/api/users', userRoutes)









app.listen(port , ()=>{
    console.log(`server post ${port}`)
});


