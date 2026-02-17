import { api } from "../configs/api";
import {create} from "zustand"
import {persist} from "zustand/middleware"
import toast from "react-hot-toast"

export const authStore = create(
    persist(
        (set)=>({
            authUser:null,
            isLogin:false,
            isRegister:false,
            isLogout:false,

            register:async (data)=>{
                set({isRegister:true})
                try {
                    const res = await api.post("/auth/register",data)
                    set({authStore:res.data})
                    toast.success("Registered success")
                    return res.data
                    
                } catch (error) {
                    toast.error(error.response?.data?.message||"register failed")
                }finally{
                    set({isRegister:false})
                }
            },

            login:async(data)=>{

                set({isLogin:true})
                try {
                    const res = await api.post("/auth/login",data)
                    set({authUser:res.data})
                    toast.success("login successfully")
                    return res.data
                    
                } catch (error) {
                    toast.error(error.response?.data?.message||"login failed")
                }finally{
                    set({isLogin:false})
                }
            },
            logout:async()=>{
                set({isLogout:false})
                try {
                     await api.post("/auth/logout")
                    set({authUser:null})
                    toast.success("logout successfully")   
                } catch (error) {
                    toast.error(error.response?.data?.message||"logout failed")
                }finally{
                    set({isLogout:false})
                }
            },
        })
    )
)