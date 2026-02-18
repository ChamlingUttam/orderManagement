import express from 'express'
import { create, deleteInfo, getAll, updateMenu } from '../controller/crud.controller.js'
import { protectedRoute } from '../middleware/auth.middleware.js'
import { isAdmin } from '../middleware/isAdmin.js'

const crudRouter = express.Router()

crudRouter.post("/create",protectedRoute,create) 
crudRouter.get('/get',protectedRoute,isAdmin,getAll)
crudRouter.put('/edit/:id',protectedRoute,isAdmin,updateMenu)
crudRouter.delete("/delete/:id",protectedRoute,isAdmin,deleteInfo
    
)

export default crudRouter