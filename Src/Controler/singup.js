const userServices=require('../Services/Singup');


async function createUser(req,res){
    try {
        const UserData=req.body;
        console.log(req.body)
        const user=await userServices.createuser(UserData);
        res.status(201).json({user:user,message:"Create user successfully"});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error.message});

        
    }

}
module.exports={createUser};