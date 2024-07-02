const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const addexpenceRoutes = require("./routes/addexpenceroutes");
const addincomeroutes = require("./routes/addincomeroutes");
const addsavingroutes = require("./routes/addsavingroutes");
const registerroutes = require("./routes/registerroutes");
const bcrypt = require("bcrypt");

const app=express()

app.use(cors())
app.use(express.json())

app.use("/", addexpenceRoutes);
app.use("/", addincomeroutes);
app.use("/", addsavingroutes);
app.use("/", registerroutes);


const PORT=process.env.PORT||8080







 //Databse connection
mongoose.connect("mongodb+srv://shehan:Shehan99@cluster0.t3v3psz.mongodb.net/Tracker?retryWrites=true&w=majority")
.then(()=>{
  
    console.log(`port number => ${PORT}`)
    app.listen(PORT,()=>console.log("server connection successful"))
}).catch((err)=>{
    console.log(err)
})

