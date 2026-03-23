const express = require('express');
const router = express.Router();

const { createStudent, ReadStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

router.post("/students",createStudent);

router.get("/students",ReadStudent);

router.put("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);

module.exports = router;