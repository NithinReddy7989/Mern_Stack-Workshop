const e=require("express")
const d=e()
const b=require("body-parser")
const mongoose = require("mongodb");
const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017/332/')
d.use(b.urlencoded({extended:true}))
d.use(e.static(__dirname+"/public"))
d.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
d.post('/save',(req,res)=>{
    const {namea,roll,cgpa}=req.body
    async function run(){
        try{
        const d=client.db('332')
        const s=d.collection('student')
        const pp={name:namea,rollno:roll,CGPA:cgpa}
        const a=s.insertOne(pp)
        console.log(a)
        const q=s.find()
        for await(const a of q){
        console.log(a)}}
        finally{
            await client.close()
        }
    }
    run().catch(console.dir);
    res.send(namea+" "+roll+" "+cgpa)
})
d.listen(3000,()=>{
    console.log("listening")
})