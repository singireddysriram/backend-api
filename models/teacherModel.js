const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    age: Number,
    subject: String,
    experience: Number,
    email: String,
    phone: String,
    address: String
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;