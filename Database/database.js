const mariadb = require('mariadb')
require('dotenv').config();

const pool = mariadb.createPool({
    host:"localhost",
    user: "root",
    password: "",
    database : "garage",
});

module.exports =  pool ;
