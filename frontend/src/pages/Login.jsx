import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Login = () => {
  const[hide,setHide] = useState(false)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-center text-red-500">
          Register
        </h1>

        <form className="space-y-5 mt-6">

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
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
              type={hide?"text":"password"}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <span
            onClick={()=>setHide(!hide)}
             className="absolute right-2 bottom-2 cursor-pointer">
              {hide ? <EyeOff fontSize={20}/> : <Eye fontSize={20}/>}
            </span>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
