const Utilisateur = require('../Models/utilisateur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUtilisateur = async (req, res) => {
    const {nom, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUtilisateur = await utilisateur.create({
        nom: nom,
        password: hash
    });
    res.status(201).json(newUtilisateur);
}

exports.loginUtilisateur = async (req, res) => {
    const {nom, password} = req.body;
    const utilisateur = await Utilisateur.findOne({ where: { nom: nom } });
    if (!utilisateur) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    const valid = await bcrypt.compare(password, utilisateur.password);
    if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
    }
    res.status(200).json({
        userId: utilisateur.id,
        token: jwt.sign(
            { userId: utilisateur.id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
        )
    });
};

exports.getAllUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll();
        res.status(200).json(utilisateurs);
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};

exports.getUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        res.status(200).json(utilisateur);
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};

exports.updateUtilisateurById = async (req, res) => {
    try {
        await Utilisateur.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: 'Utilisateur updated successfully' });
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};

exports.deleteUtilisateurById = async (req, res) => {
    try {
        await Utilisateur.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'Utilisateur deleted successfully' });
    } catch(err) {
        console.error('Unable to connect to the database:', err);
        console.log(err);
    }
};