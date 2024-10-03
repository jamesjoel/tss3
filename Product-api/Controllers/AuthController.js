const routes=require("express").Router()
const User= require("../model/User")
const sha1=require("sha1")  
const jwt =require("jsonwebtoken")

routes.post("/" , async(req,res)=>{ 
    console.log(req.headers);
    let username= req.body.email;
    let password =req.body.password;
    let result =await User.find({email : username});
    // here we get the data of user whose email will match with entered data in email:usename
    if(result.length ==1)  //user name is present
    {
       if(result[0].password==sha1(password))
       {// here we converted our password into sha1 and compare it with  the converted password present in password in database
       if(result[0].status==1)
       {
        let userobj ={ id: result[0]._id,name:result[0].username, email:result[0].email}
         let x=jwt.sign(userobj,"hello")
        res.send({success:true,token : x,name:result[0].username});
        }
        else{
            res.send({success:false,errType:3})
        }
    }
       else{
      res.send({success:false , errType:2});
       }

       
    }
    else{//username is wrong

        res.send({success : false , errType :1})
    }
   
 
})
module.exports=routes; 

// here in this we are not creating seperate model for this controller we are using our user model here