import * as YUP from 'yup'

let LoginSchema = YUP.object({
    email : YUP.string().email("Insert Correct Email Id").required("Insert Your Email-Id/Username"),
    password : YUP.string().required("Insert Your Password")
})

export default LoginSchema;