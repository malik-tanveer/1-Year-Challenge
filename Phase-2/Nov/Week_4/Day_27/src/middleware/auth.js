import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, "MySecretKey");
    req.user = decoded.user;  // { id: user._id }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};