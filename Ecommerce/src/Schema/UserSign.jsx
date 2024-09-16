
import * as YUP from 'yup'
// FIRTLY CREATE A YUP OBJECT
let SignUPSchema=YUP.object({
    username:YUP.string().required("Insert your full name")
    ,email:YUP.string().email("Invalid Email id").required("Insert your email")
    ,password:YUP.string().min(6,"password must be 6 character").required("Insert your password")
    ,repass:YUP.string().oneOf([YUP.ref('password')],'Password did not match').required("Insert your repass")
    ,address:YUP.string().required("Insert your address")
    ,pincode:YUP.number().typeError("insert numbers").required("Insert your pincode")
    ,contact :YUP.number().min(1000000000,"contact should be in 10 character").max(9999999999,"Contact number should be in 10 character").typeError("Insert numbers only").required("Insert your contact")
    // ,city:YUP.string().required("Insert your city")
    ,gender:YUP.string().required("Insert your gender")

});
export default  SignUPSchema;

// here  one of yup .ref matches the repass with pass 
// in password .length function 
// in number we don't count length we count between  digits