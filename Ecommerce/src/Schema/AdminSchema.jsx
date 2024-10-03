import * as YUP from 'yup'
const AdminSchema=YUP.object(
    {
     name:YUP.string().required("Insert valid email-id"),
     password:YUP.string().required("Insert valid password")
    }
);
export default AdminSchema;