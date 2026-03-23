const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    rollno: String,
    email: String,
    course: String,
    phone: String,
    address: String,
    department: String,
    isActive: Boolean,
    admissionDate: Date
});

const Student  = mongoose.model("Student",studentSchema);

module.exports = Student;