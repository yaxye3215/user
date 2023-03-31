import User from "../models/usermodels.js"



export const getAllUsers = async(req,res)=>{
    const userfind = await User.find()

    res.json(userfind)
}

export const register = async(req, res)=>{
    const {name, email , password} = req.body
    const user = new User({
        name, email, password
        
    });
    const newdata = await user.save();
    res.status(201).json(newdata);
}
export const update = async(req, res)=>{
    const {id} = req.params
    const user = await User.findByIdAndUpdate(id , req.body)
    if (user) {
        const userUdate = await User.findById
        res.json(userUdate)
        
    }
}

export const login= async(req, res)=>{
    const{email, password} = req.body
    const user = await User.findOne({email})
    if (user) {
        res.json(user);
    }
    
}
export const deleteuser = async(req, res)=>{
    const {id} = req.params
    const user = await User.findByIdAndDelete(id)
    res.json({messige : 'succusfull delede'})
}