const jwt = require('jsonwebtoken');

exports.isAdmin = async (req, res, next) => {
     const token = req.query.token ? req.query.token : req.headers.authorization;
     if (token && process.env.API_KEY) {
         jwt.verify(token, process.env.API_KEY, (err, decoded) => {
             if (err) {
                 res.status(401).json({message: "Token invalide"});
             } else {
                 if(decoded.role == 'admin'){
                     next();
                 }else{
                     res.status(401).json({message: "Vous n'avez pas les droits"});
                 }
             }
         });
     } else {
         res.status(401).json({message: "Token manquant"});
     }
 };