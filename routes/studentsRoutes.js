const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

const { createStudent, ReadStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

router.post("/students",createStudent);

router.get("/students",protect,ReadStudent);

router.put("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);

module.exports = router;