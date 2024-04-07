const express=require('express')
const { GetAllUsers, postUser, updateUser, deleteUser, getSingleUser } = require('./controllers')
const router=express.Router()

router.get('/', GetAllUsers)
router.post('/', postUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getSingleUser)

module.exports=router