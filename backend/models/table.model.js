import mongoose from "mongoose";

const tableSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Table = mongoose.model("Table", tableSchema);

export default Table;
