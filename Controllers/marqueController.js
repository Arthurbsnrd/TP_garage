const Marque = require('../Models/marque');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createMarque = async (req, res) => {
    let laMarque = req.body;
    try {
        const newMarque = await Marque.create({ nom: laMarque.nom });
        res.status(200).json({"auto-generatedID + nom": newMarque.id + " " + newMarque.nom});
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};

exports.getAllMarques = async (req, res) => {
    try {
        const marques = await Marque.findAll();
        res.status(200).json(marques);
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};

exports.getMarqueById = async (req, res) => {
    try {
        const marque = await Marque.findByPk(req.params.id);
        res.status(200).json(marque);
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};

exports.updateMarqueById = async (req, res) => {
    try {
        await Marque.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: 'Marque updated successfully' });
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};

exports.deleteMarqueById = async (req, res) => {
    try {
        await Marque.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'Marque deleted successfully' });
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};
