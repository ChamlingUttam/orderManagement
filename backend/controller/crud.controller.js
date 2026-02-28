
import Crud from "../models/crud.model.js";

export const create = async (req, res) => {
  try {
    const { price, foodItem } = req.body;

    if (!price || !foodItem) {
      return res.status(400).json({ message: "Fill all fields" });
    }

    const newFoodItem = await Crud.create({ foodItem, price });
    res.status(201).json(newFoodItem);

  } catch (error) {
    res.status(500).json({ message: error.message || "New item is not created" });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, foodItem } = req.body;  // ✅ was 'name', changed to 'foodItem'

    if (!price || !foodItem) {
      return res.status(400).json({ message: "Fill all fields" });
    }

    const updateInfo = await Crud.findByIdAndUpdate(
      id,
      { price, foodItem },                // ✅ was 'name', changed to 'foodItem'
      { new: true }
    );

    if (!updateInfo) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updateInfo);

  } catch (error) {
    res.status(500).json({ message: error.message || "Menu is not updated" });
  }
};

export const deleteInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Crud.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message || "Item is not deleted" });
  }
};

export const getAll = async (req, res) => {
  try {
    const allItems = await Crud.find();
    res.status(200).json(allItems);

  } catch (error) {
    res.status(500).json({ message: error.message || "Can't read the info" });
  }
};
