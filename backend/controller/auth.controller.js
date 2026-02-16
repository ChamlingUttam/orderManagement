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
          //role:role || "user" here if role is not provided while registering then it will be user by deafult
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


export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    generateToken(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
    })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong with login" })
  }
}

export const logout = (req,res)=>{

    try {
        res.cookie('jwt',"",{
            maxAge:0,
            httpOnly:true
        })
        res.status(200).json({message:"successfully logout"})
    } catch (error) {
        res.status(500).json({message:"something went wrong with logout"})
    }
}
