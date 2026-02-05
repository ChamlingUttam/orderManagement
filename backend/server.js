import express from 'express'
import 'dotenv/config'
import { dbConnect } from './config/db.js'
import crudRouter from './routes/crud.route.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/api/crud',crudRouter)

dbConnect()
app.listen(PORT,()=>{
console.log("server is running")
})