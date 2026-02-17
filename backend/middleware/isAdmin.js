export const isAdmin = async(req,res,next)=>{
    if(req.user?.role !=="admin"){
        res.status(403).json({message:"only admin can access"})
    }
}