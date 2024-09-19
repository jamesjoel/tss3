const express =require("express");
const app= express();
const cors=require("cors");
const upload =require("express-fileupload");
app.use(express.static(__dirname+"/assets"));
// here giving path to access image folder
app.use(upload());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use (require("./Routes/allroutes"));

const port=process.env.PORT||3001;
// Api status code
app.get('/api', (req, res) => {
    // Simulating different status codes
    const statusCode = req.query.status;

    switch (parseInt(statusCode)) {
        case 200:
            res.status(200).json({ message: "OK", data: "Successful response" });
            break;
        case 201:
            res.status(201).json({ message: "Created", data: "Resource created successfully" });
            break;
        case 400:
            res.status(400).json({ error: "Bad Request", message: "Invalid request syntax" });
            break;
        case 401:
            res.status(401).json({ error: "Unauthorized", message: "Authentication required" });
            break;
        case 403:
            res.status(403).json({ error: "Forbidden", message: "You don't have access rights" });
            break;
        case 404:
            res.status(404).json({ error: "Not Found", message: "Requested resource not found" });
            break;
        case 500:
            res.status(500).json({ error: "Internal Server Error", message: "Server encountered an issue" });
            break;
        default:
            res.status(500).json({ error: "Unknown Status", message: "Unexpected error occurred" });
            break;
    }
});

app.listen(port, ()=>{
    console.log("Server is running on port number",port)
});
