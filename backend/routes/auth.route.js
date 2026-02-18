import express from 'express'
import { login, logout, register } from '../controller/auth.controller.js'
import { protectedRoute } from '../middleware/auth.middleware.js'

const authRouter = express.Router()

authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/logout',protectedRoute,logout)

export default authRouter