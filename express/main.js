const express= require('express')
const app=express()
const mongoose = require("mongoose")
mongoose
  .connect("mongodb+srv://anuska:<ahhnuska>@cluster0.q8jdaia.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  })
app.use(express.json())
app.post("/create", async(req, res) => {
    try{
    const entry = new user(req.body)
    const result=await entry.save()
    res.json(result)
    }
    catch(error){
    
        res.json({error:error.message})
      }
  })
app.put("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
    const result = await user.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!result) {
          return res.json({ error: 'User not found' })
        }
        res.json(result);
      }
      catch(error){
        res.json({ error: error.message })
      }
  })
app.get("/read",async(req,res)=>{
    try{
    const data= await user.find()
    res.json(data)
    }
    catch(error){
      res.json(error.message)
    }
  })
app.delete("/delete/:name",async(req,res)=>{
    const {name}=req.params
    try{
    const result= await user.findOneAndDelete({_id:name})
      if (!result) {
          return res.json({ error: 'User not found' });
      }
      res.json("Deleted").end();
  
    }
    catch(error){
      res.json({error:error.message})
    }
  })

app.listen(3000,()=>{
    console.log("Listening to the port")
})