import express from 'express'
import { userController } from '../controller/userController'

const usercontroller=new userController()
const router=express.Router()

router.post("/registerUser",usercontroller.registerUser)

export default router