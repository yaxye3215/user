import e from "express";
import express from "express";
import mongoose from "mongoose";
import User from "./models/usermodels.js";
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = 3000;
app.use(express.json())

app.get('/', async(req, res)=>{
    const userfind = await User.find()

    res.json(userfind)
});

app.get('/:id', async(req, res)=>{
    const {id}= req.params;
    const user = await User.findById(id)

    res.json(user)
});

app.post('/', async(req, res)=>{
    const {name, email , password} = req.body
    const user = new User({
        name, email, password
        
    });

    const newdata = await user.save();
    res.status(201).json(newdata);
});

app.put("/:id" , async(req , res)=>{
    const {id} = req.params
    const user = await User.findByIdAndUpdate(id , req.body)
    if (user) {
        const userUdate = await User.findById
        res.json(userUdate)
        
    }
})

app.delete("/:id", async(req , res)=>{
    const {id} = req.params
    const user = await User.findByIdAndDelete(id)
    res.json({messige : 'succusfull delede'})
})


app.listen(port , ()=>{
    console.log(`server post ${port}`)
});

mongoose.connect(process.env.MONGODB_URL).then(
    ()=>{ console.log("connect the datebase")

}).catch((e)=>{
    console.log(e)
})
