const mongoose=require('mongoose')

const modelUserSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
},{
  timestamps:true
})

const userSchema= mongoose.model('user', modelUserSchema)
module.exports=userSchema