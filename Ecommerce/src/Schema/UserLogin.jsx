import * as YUP from 'yup'
const LoginfrmSchema=YUP.object(
    {
     email:YUP.string().required("Insert valid email-id"),
     password:YUP.string().required("Insert valid password")
    }
);
export default LoginfrmSchema;