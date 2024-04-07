const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const router=require('./router.js')

const PORT=process.env.PORT||8000


const app=express()
app.use(express.json())

app.use('/api/user', router)

mongoose.connect(process.env.MONGO)
  .then(() => app.listen(PORT, ()=>{
    console.log(`App listening on ${PORT} && connected to DB.`)
  }));


