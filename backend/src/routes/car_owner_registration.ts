import express from "express"
import { Car_owner } from ".././entities/carowner";

const router=express.Router();

router.post('/api/user-registration',async(req,res)=>{
    const{
        firstname,
        lastname,
        phone,
        email,
        address,
        password,
    }=req.body;
    
    const user=Car_owner.create({
        firstname:firstname,
        lastname:lastname,
        phone:phone,
        email:email,
        address:address,
        password:password,
    });

    try{
        await user.save();
        res.send("User created successfully");
    }
    catch(error){
        console.log(error);
    }
});

export {
    router as registerUserRouter
}