const User = require("../../database/schema/userSchema");

const userList = async(req, res)=>{
    try{
        const allUser = await User.find();
        if(allUser!=null){
            return res.status(200).json({msg:"All users list", status:"success", data:allUser})
        }
        return res.status(404).json({msg:"No List to show", status:"waring", data:allUser})
    }catch(error){
        console.error(`Error while requesting list of users: ${error}`)
        return res.status(500).json({msg:"Internal Server error", status:"error", data:{}}); 
    }
}

const userRegistration = async(req, res)=>{
    try{
      const {email} = req.body;
      const isEmail = await User.findOne({email:email});
      if(isEmail){
        return res.status(409).json({msg:"User already exist", status:"warning", data:{}});
      }

      const newUser = await User(req.body);
      if(newUser){
        const isSaved = await newUser.save();

        if(isSaved){
            return res.status(201).json({msg:"User created successfully", status:"success", data:req.body})
        }
        console.log(`Error while saving new user`);
       return res.status(500).json({msg:"Internal Server error", status:"error", data:{}}); 
      }
      console.log(`Error while creating new user`);
      return res.status(500).json({msg:"Internal Server error", status:"error", data:{}});  
    }catch(error){
        console.log(`Error in regestering the new user: ${error}`)
        return res.status(500).json({msg:"Internal Server error", status:"error", data:{}}); 
    }
}

const userUpdate = async(req, res)=>{
    try{
       const id = req.params.id;
       const user = await User.findOne({_id:id});
       const updatedValue = req.body;
       if(user){
        const UpdateUser = await User.findByIdAndUpdate(id,updatedValue)
        if(UpdateUser){
            const updatedUser = await User.findOne({_id:id});
        return res.status(200).json({msg:"User found successfully", status:"success", data:updatedUser});
        }
       }
       return res.status(400).json({msg:"User does not exist", status:"error", data:{}})
    }catch(error){
        console.log(`Error in updatein the user: ${error}`)
        return res.status(500).json({msg:"Internal Server error", status:"error", data:{}}); 
    }
}

const userDelete = async(req, res)=>{
    try{
        const _id = req.params.id;
        const currentUser = await User.findOne({_id});
        if(currentUser){
          const isUserDeleted = await User.findByIdAndDelete(_id);
          if(isUserDeleted){
            return res.status(200).json({msg:"User Deleted Successfully",status:"success", data:{}});
          }
          console.error(`Problem in deleting user by id`)
          return res.status(500).json({msg:"Internal server error", status:'error', data:{}})
        }
        return res.status(404).json({msg:"User does not exist", status:"error", data:{}})
    }catch(error){
        console.log(`Error in Deleting the user: ${error}`)
        return res.status(500).json({msg:"Internal Server error", status:"error", data:{}});
    }
}

module.exports ={userList, userRegistration, userUpdate, userDelete}
