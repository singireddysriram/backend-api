const jwt = require('jsonwebtoken');

const protect = (req,res,next)=>{
try{
const header = req.headers.authorization

if(!header){
    return res.json({message: "no token found"});

}

const token = header.split(" ")[1]

const decode = jwt.verify(token,process.env.JWT_KEY);

req.user = decode;

next();




}catch(err){
res.json({message: "invalid expired token"})
}
}

module.exports = protect;