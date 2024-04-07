
const userSchema=require('./model')

const GetAllUsers=async(req, res)=>{
  try {
    const users=await userSchema.find({})
    res.status(200).json(users)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({msg:`error while fetching data.`})
  }
}

const getSingleUser=async(req, res)=>{
  try {
    const {id}=req.params
    const user=await userSchema.findById(id)
    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({msg:`error while getting single user data.`})
  }
}

const postUser=async(req, res)=>{
  try {
    const user=await userSchema.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({msg:`error while creating data.`})
  }
}

const updateUser=async(req,res)=>{
  try {
    const {id}=req.params
    const user = await userSchema.findByIdAndUpdate(id, req.body)

    if(!user){
      return res.status(404).json({message:`user not found.`})
    }
    const updateuser=await userSchema.findById(id)
    res.status(200).json(updateuser)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({msg:`error while updating data.`})
  }
}

const deleteUser=async(req,res)=>{
  try {
    const {id}=req.params
    const user = await userSchema.findByIdAndDelete(id, req.body)

    if(!user){
      return res.status(404).json({message:`user not found.`})
    }
    res.status(200).json({msg:`deleted succesfully`})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({msg:`error while updating data.`})
  }
}

module.exports={
  GetAllUsers,
  postUser,
  updateUser,
  deleteUser,
  getSingleUser
}