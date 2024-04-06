const express=require("express")
const app=express()
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/public/student.html")
})
app.post("/save",(req,res)=>
{
    console.log(req.body)
    const {name,roll,cgpa}=req.body
    res.send(name+" "+roll+" "+cgpa)
})
//capturing the data from student.html to mongodb
app.listen(3000,()=>
{
    console.log("Working Perfectly")
})