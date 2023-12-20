const express = require('express');
const router = express.Router();
const utilisateurController = require('../Controllers/utilisateurController');
const middlewareFunction = require('../Middleware/middleware');


router.post('/utilisateur', utilisateurController.createUtilisateur);
router.get('/utilisateurs', utilisateurController.getAllUtilisateurs);
router.get('/utilisateur/:id', utilisateurController.getUtilisateurById);
router.put('/utilisateur/:id', utilisateurController.updateUtilisateurById);
router.delete('/utilisateur/:id', utilisateurController.deleteUtilisateurById);
router.post('/login', utilisateurController.loginUtilisateur);


module.exports = router;