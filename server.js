require('dotenv').config();
const express = require('express')
const connectdb = require('./config/db')
const StudentRoutes = require('./routes/studentsRoutes')
const authroutes = require('./routes/authRoutes')
const app = express()

app.use(express.json())
// MongoDB connection
connectdb()


// Home
app.get("/",(req,res)=>{
 res.send("Student CRUD API")
})


// CREATE
app.use("/api",StudentRoutes);
app.use("/auth",authroutes);


// READ ALL


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
 console.log("Server running on port 4000")
})