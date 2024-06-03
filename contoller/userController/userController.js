const userList = (req, res)=>{
    res.json("this user list is comming form userController");
}


const userRegistration =(req, res)=>{
    res.json("Successfully Created a new user");
}


module.exports ={userList, userRegistration}
