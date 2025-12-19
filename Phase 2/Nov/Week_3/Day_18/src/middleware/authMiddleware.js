import jwt from 'jsonwebtoken';


const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({error : "No Token Provided"});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, "mysecretkey");
        res.userId = decoded.id;
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: "Invalid & expire token"});
    }
}


export default verifyToken ;