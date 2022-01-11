const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
const router=require('./routes/notes');

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

//Database Connect
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("Successfully connected to database"))
    .catch((err)=>console.log(err)
);

//Routes
app.use("/notes",router);

app.listen(5000,()=>{
    console.log("Backend server running at port 5000");
});