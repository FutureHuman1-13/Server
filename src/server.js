const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello from the other side!");
})

app.listen(port,()=>{
    console.log(`Port is listen ${port}`);
})