import * as YUP from 'yup'
let ChangePassSchema=YUP.object({
password:YUP.string().required("Enter your Current password"),
newpass:YUP.string().min(6,"password must be 6 character").required("Enter new pasword"),
repass:YUP.string().oneOf([YUP.ref("newpass")],"repass did not match").required("Enter your new password again")
})
export default ChangePassSchema 