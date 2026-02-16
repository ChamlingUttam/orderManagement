import User from "../models/auth.model.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js"

export const register = async(req,res)=>{
    try {

        const {fullname,email,password} = req.body

        if(!fullname || !email || !password){
            return res.status(400).json("please fill the field")
        }

        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(409).json({message:"user already exist"})
        }

        if(password.length < 8){
            return res.status(422).json({message:"password must be greater then 8 character"})
        } 

        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password,salt)

        const newUser = await User.create({
            fullname,
            email,
            password:hashPass
        })

        generateToken(newUser._id,res)
        
        res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            email:newUser.email,
            role:newUser.role

        })

        
    } catch (error) {
        res.status(500).json({message:"something is wrong with register"})
    }
}


export const login = (req,res)=>{

}

export const logout = (req,res)=>{

}
