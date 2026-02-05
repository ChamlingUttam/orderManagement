import express from 'express'
import { create, deleteInfo, getAll, updateMenu } from '../controller/crud.controller.js'

const crudRouter = express.Router()

crudRouter.post("/create",create) 
crudRouter.get('/get',getAll)
crudRouter.put('/edit/:id',updateMenu)
crudRouter.delete("/delete/:id",deleteInfo
    
)

export default crudRouter