const express = require("express");
const cors = require("cors");
const path = require("path");

const server = express();
server.use(cors());

server.use(express.static("build"));
server.use(express.json());

server.use("/*",(req,res)=>{
  res.sendFile(path.resolve(__dirname ,"build","./index.html"))
})

server.listen(8001, () => {
  console.log("server started at 8001");
});