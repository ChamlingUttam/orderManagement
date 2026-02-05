import mongoose from 'mongoose'

const crudSchema = new mongoose.Schema({
foodItem:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
}
},{timestamps:true})

const Crud = mongoose.model("Crud",crudSchema)
export default Crud