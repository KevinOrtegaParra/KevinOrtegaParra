const express = require('express');
const {mongoConnet} = require('./databases/config')
const animeRoutes = require('./routes/anime');

const dotenv = require("dotenv").config();
const cors = require('cors');
mongoConnet();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors({
    origin: '*'
}))

app.listen(port,() => console.log("server listenig on sport", port));

//Middleware
app.use(express.json());
app.use('/api/v1',animeRoutes);

//routes
app.get("/",(req,res)=>{
    res.send("Welcome to my api");
})

app.get("*",(req,res)=>{
    res.status(404).json({
        msj: "No encontrado",
        status: 404
    });
})



