import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { authStore } from "../stores/auth.store";
import toast from "react-hot-toast";

const Login = () => {
  const [hide, setHide] = useState(false);
  const { isLogin, login } = authStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await login(formData);

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-center text-red-500">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type={hide ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span
              onClick={() => setHide((prev) => !prev)}
              className="absolute right-3 bottom-2 cursor-pointer text-gray-500"
            >
              {hide ? <Eye size={20} /> : <EyeOff size={20} />}
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLogin}
            className={`w-full py-2 rounded-xl text-white transition ${
              isLogin
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isLogin ? "Logging..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
