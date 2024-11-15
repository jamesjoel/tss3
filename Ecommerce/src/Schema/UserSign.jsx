
import * as YUP from 'yup'
import Api_Url from '../constants/Api_Url';
import axios from 'axios';
// FIRSTLY CREATE A YUP OBJECT
let SignUPSchema=YUP.object({
    username:YUP.string().test(
     "first letter uppercase",'Wrong Name',(value)=>{
        let arr=value.split("");
        let f=arr[0];
        // if(f==f.toUpperCase())
        // {
        //   return true;
        // }
        // else{
        //    return false;
        // }
         return f==f.toUpperCase()?true:false
     }
    ).required("Insert your full name")
    ,email:YUP.string().email("Invalid Email id")
    .test("Check_UserName","This Username is Already exists",async(value)=>{
        let response=await axios.get(`${Api_Url}CheckUserName/${value}`)
        return response.data.success;
        }).required("Insert your email")
    ,password:YUP.string().min(6,"password must be 6 character").required("Insert your password")
    ,repass:YUP.string().oneOf([YUP.ref('password')],'Password did not match').required("Insert your repass")
    ,address:YUP.string().required("Insert your address")
    ,pincode:YUP.number().typeError("insert numbers").required("Insert your pincode")
    ,contact :YUP.number().min(1000000000,"contact should be in 10 character").max(9999999999,"Contact number should be in 10 character").typeError("Insert numbers only").required("Insert your contact")
    ,state:YUP.string().required("Insert your state")
    ,city:YUP.string().required("Insert your city")
    ,gender:YUP.string().required("Insert your gender")

});
export default  SignUPSchema;

// here  one of yup .ref matches the repass with pass 
// in password .length function 
// in number we don't count length we count between  digits