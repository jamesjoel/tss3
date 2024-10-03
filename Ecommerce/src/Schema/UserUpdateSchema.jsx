import * as YUP from 'yup'
// FIRTLY CREATE A YUP OBJECT
let UserUpdateSchema=YUP.object({
    username:YUP.string().required("Insert your full name")
    ,address:YUP.string().required("Insert your address")
    ,email:YUP.string().email("Invalid Email id").required("Insert your email")
    ,pincode:YUP.number().typeError("insert numbers").required("Insert your pincode")
    ,contact :YUP.number().min(1000000000,"contact should be in 10 character").max(9999999999,"Contact number should be in 10 character").typeError("Insert numbers only").required("Insert your contact")
    ,state:YUP.string().required("Insert your state")
    ,city:YUP.string().required("Insert your city")
    ,gender:YUP.string().required("Insert your gender")

});
export default  UserUpdateSchema;