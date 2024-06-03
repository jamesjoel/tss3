const routes=require(express).router();

routes.use("/api/student",require("../controllers/student.js"));
// (../-indicates to come back from prev location)//
routes.use("/api/teacher",require("../controllers/teacher.js"));
routes.use("/api/staff",require("../controllers/staff.js"));
module.export=routes;