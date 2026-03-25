const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register a new user

exports.register = async (req, res) => {
    try{
        const { name, email, password } = req.body;


        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.json({ message: "User already exists" });
        }

        // Hash the password
        const haspswrd = await bcrypt.hash(password, 15);

        const user = await User.create({
             name, 
             email, 
             password: haspswrd 
            });

        res.json({
            message: "User registered successfully",
            data: user
        });


    }catch(err){
        res.status(500).json({ error: err.message });
    }
}


// Login user

exports.login = async (req, res) => {
    try{
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User not found" });
        }

        // Compare the provided password with the hashed password
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
        {id: user._id},
        process.env.JWT_KEY,
        {expiresIn: "1h"}
       )
       
        res.json({
            message:"login done",
            data:token
        })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};