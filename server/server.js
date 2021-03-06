require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser')

const mongoose = require('mongoose');

const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// configuración global de rutas
app.use(require('./routes/index'));

// conectar a mongodb
mongoose.connect(process.env.URLDB, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});

// Escuchar el servidor en un puerto
app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});