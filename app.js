const express = require("express");

const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.get("/Mallik", (req,res) =>{
    res.send("Hello Mallik")
})

app.listen("8000")