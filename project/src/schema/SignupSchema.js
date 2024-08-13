import * as YUP from 'yup'
let SingupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("Invalid Email Id").required("Insert Email Id"),
    password : YUP.string().required("Insert Password"),
    repass : YUP.string().oneOf([YUP.ref('password')], "Password and Re-Password not matched").required("Insert Re-Password"),
    address : YUP.string().required("Insert Address"),
    city : YUP.string().required("Select Your City"),
    gender : YUP.string().required("Select Your Gender"),
    contact : YUP.number().typeError("Insert Numbers Only").min(1000000000, "Contact Number must be of 10 digit").max(9999999999, "Contact Number must be of 10 digit").required("Insert Your Contact Number")
});

export default SingupSchema;