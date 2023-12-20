const express = require('express');
const router = express.Router();
const marqueController = require('../Controllers/marqueController');
const middlewareFunction = require('../Middleware/middleware');


router.post('/marque', marqueController.createMarque);
router.get('/marques', marqueController.getAllMarques);
router.get('/marque/:id', marqueController.getMarqueById);
router.put('/marque/:id', marqueController.updateMarqueById);
router.delete('/marque/:id', marqueController.deleteMarqueById);


module.exports = router;