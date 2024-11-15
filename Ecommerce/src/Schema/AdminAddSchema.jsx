import * as YUP from 'yup'
const AdminAddSchema=YUP.object(
    {
     name:YUP.string().required("Insert valid email-id"),
     password:YUP.string().required("Insert valid password")
     ,repass:YUP.string().oneOf([YUP.ref('password')]).required("Password and repass did not match")

    }
);
export default AdminAddSchema;