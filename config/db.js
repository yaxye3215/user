import mongoose from 'mongoose'

const ConFigDb = async()=>{
    mongoose.connect(process.env.MONGODB_URL).then(
        ()=>{ console.log("connect the datebase")
    
    }).catch((e)=>{
        console.log(e)
    })
}

export default ConFigDb