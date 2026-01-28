import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app=express()
const port = process.env.PORT || 3200

app.use(cors())

app.get("/health",(req,res)=>{
   res.status(200).send({
    massage:"I am ok And Running"
   })
})
app.get("/",(req,res)=>{
    res.status(200).send({
    massage:"I am ok And Running aappp"
   })
})

app.listen(port,()=>{console.log(`App running on Port${port}`)})


