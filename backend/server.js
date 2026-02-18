import express from 'express'
import 'dotenv/config'
import { dbConnect } from './config/db.js'
import crudRouter from './routes/crud.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from "cookie-parser"
import cors from "cors"
import tableRoute from './routes/table.route.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use('/api/crud',crudRouter)
app.use('/api/auth',authRouter)
app.use("/api/table",tableRoute)
dbConnect()
app.listen(PORT,()=>{
console.log("server is running")
})