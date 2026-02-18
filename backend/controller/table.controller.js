import Table from "../models/table.model.js";


export const addTables = async(req,res)=>{

    try {

        const{number} = req.body

        const tableExist = await Table.findOne({number})
        if(tableExist){
            return res.status(409).json({message:"table already exist"})
        }

        const newTable = await Table.create({number})
        res.status(201).json(newTable)
        
    } catch (error) {
        res.status(500).json({message:"cant create table"})
    }

}

export const getTables = async()=>{

    try {

        const getTable = await Table.find().sort({number:1})
        res.status(200).json(getTable)
        
    } catch (error) {
        res.status(500).json({message:"cant get the table"})
    }

}

