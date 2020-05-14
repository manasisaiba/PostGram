const mongoose=require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/msproject/image/upload/v1589448570/pict-customer-male-ivr-people-vector-stencils-library.png-diagram-flowchart-example_kikwfu.png"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})
mongoose.model("User",userSchema)