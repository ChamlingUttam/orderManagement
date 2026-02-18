import express from "express"
import { protectedRoute } from "../middleware/auth.middleware.js"
import { addTables, getTables } from "../controller/table.controller.js"

const tableRoute = express.Router()

tableRoute.post("/addTable",protectedRoute,addTables)
tableRoute.get("/getTable",getTables)

export default tableRoute