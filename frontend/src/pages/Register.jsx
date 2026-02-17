import React, { useState } from "react";
import { EyeOff,Eye, Form } from "lucide-react";
import toast from "react-hot-toast";
import { authStore } from "../stores/auth.store";

const Register = () => {
    const[hide, setHide] = useState(false)

    const[formData,setFormData] = useState({
      fullname:"",
      email:"",
      password:"",
    })


    const{register,isRegister}=authStore()
    const handleChange = (e)=>{
      setFormData({...formData,[e.target.name]: e.target.value})
    }


    const validateForm = ()=>{

      if(!formData.fullname.trim()){
        toast.error("fullname is required")
        return false
      }

      if(!formData.email.trim()){
        toast.error("email is required")
        return false
      }
       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }

    if(!formData.password  ){
      toast.error("password cant be empty")
      return false
    }

    if(formData.password<8){
      toast.error("password character must be greater than 8")
      return false
    }

    return true

    }

    const handleSubmit = (e)=>{
      e.preventDefault()

      const success = validateForm()

      if(success){
        register(formData)
        setFormData({
          fullname:"",
          email:"",
          password:"",
        })
      }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-center text-red-500">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
            onChange={handleChange}
            name="email"
            value={formData.email}
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
            onChange={handleChange}
            name="password"
            value={formData.password}
              type={hide ? "text" : "password"}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <span 
            onClick={()=>setHide(!hide)}
            className="absolute bottom-2 right-2  cursor-pointer ">
            {hide ? <EyeOff fontSize={20}/> : <Eye fontSize={20}/>}
            </span>
          </div>

          <button
          disabled={isRegister}
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
          >
            {isRegister ? "Creating new account" :"Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
