const Student = require('../models/studentModel');

exports.createStudent = async(req,res)=>{
 try{

  const student = await Student.create(req.body)

  res.status(201).json({
   message:"Student created",
   data:student
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
}

exports.ReadStudent = async(req,res)=>{
 try{

  const students = await Student.find()

  res.json({
   message:"All students",
   data:students
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
}

exports.updateStudent = async (req, res) => {
 try {

  const student = await Student.findByIdAndUpdate(
   req.params.id,   // get id from URL
   req.body,        // updated data
   { new: true }    // return updated document
  );

  if (!student) {
   return res.status(404).json({ message: "Student not found" });
  }

  res.json({
   message: "Student updated successfully",
   data: student
  });

 } catch (err) {
  res.status(500).json({ error: err.message });
 }
};

exports.deleteStudent = async (req, res) => {
 try {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
   return res.status(404).json({ message: "Student not found" });
  }

  res.json({
   message: "Student deleted successfully"
  });

 } catch (err) {
  res.status(500).json({ error: err.message });
 }
};