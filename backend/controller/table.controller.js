import Table from "../models/table.model.js";

export const addTables = async (req, res) => {
  try {
    // Get highest table number
    const lastTable = await Table.findOne().sort({ number: -1 });

    const nextNumber = lastTable ? lastTable.number + 1 : 1;

    const newTable = await Table.create({ number: nextNumber });

    res.status(201).json(newTable);
  } catch (error) {
    res.status(500).json({ message: "Cannot create table" });
  }
};

export const getTables = async (req, res) => {
  try {
    const tables = await Table.find().sort({ number: 1 });
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ message: "Cannot fetch tables" });
  }
};
