const express = require('express')
const app = express()
const db = require('./Database/database')
const bodyParser = require('body-parser')
const cors = require('cors')
const middlewareFunction = require('./Middleware/middleware')
const marqueRoute = require('./Routes/marqueRoute')
const utilisateurRoute = require('./Routes/utilisateurRoute')
const sequelize = require('./Database/databaseSequelize')


app.use(cors())
app.use(bodyParser.json())

app.use(express.json())

app.use('/marque', marqueRoute);
app.use('/utilisateur', utilisateurRoute);

app.listen(3000, () => {
    console.log('server à l\'écoute')
})