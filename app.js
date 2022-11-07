const express=require("express");
const app=express();
const bodyParser=require("body-parser");
require("./Db/conn")
app.use(bodyParser.json());
// Middleware
/*app.use("/posts",()=>{
    console.log("this is middleware running")
})*/
// import routes
const postsRout=require("./Routes/posts");
app.use("/posts",postsRout)
// Routes
app.get("/",(req,res)=>{
    res.send("we are on home")
})





// how do we start listening the server
app.listen(3000)