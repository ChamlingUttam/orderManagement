import express from 'express'
import 'dotenv/config'
import { dbConnect } from './config/db.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

dbConnect()
app.listen(PORT,()=>{
console.log("server is running")
})