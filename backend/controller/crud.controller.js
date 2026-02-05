import Crud from "../models/crud.model.js";

export const create = async (req, res) => {
  try {
    const { price, foodItem } = req.body;

    if (!price || !foodItem) {
      return res.status(400).json({
        message: "Fill all fields",
      });
    }

    const newFoodItem = await Crud.create({
      foodItem,
      price,
    });

    res.status(201).json(newFoodItem);
  } catch (error) {
    res.status(500).json({
      message: error.message || "New item is not created",
    });
  }
};


export const updateMenu = async(req,res)=>{
    try {
        const {id} = req.params

        const {price,name} = req.body 

        const updateInfo = await Crud.findByIdAndUpdate(id,{price,name},{new:true})
        res.status(200).json(updateInfo)
        
    } catch (error) {
        res.status(500).json({message:error.message||"menu is not updated"})
    }
}


export const deleteInfo = async(req,res)=>{
    try {

        const {id}  = req.params

        await Crud.findByIdAndDelete(id)

        res.status(200).json({message:"deleted successfully"})
        
    } catch (error) {
        res.status(500).json({message:error.message||"item is not deleted"})
    }
}

export const getAll  = async(req,res)=>{

    try {

        const allItems = await Crud.find()
        res.status(200).json(allItems)
        
    } catch (error) {
        res.status(500).json({message:error.message||"cant read the info"})
    }
}