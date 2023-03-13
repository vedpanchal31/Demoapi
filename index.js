const express = require('express')
const cors = require('cors')
const app  =  express()

app.use(cors())

const apiData = require('./data.json')

app.get("/",(req,res)=>{
    res.send("i am live")
})

app.get("/service",(req,res)=>{
    res.send(apiData)
})


const port = process.env.PORT || 3000

const start = async() => {
    try {
        app.listen(port,()=>{
           console.log(`Port is running ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()