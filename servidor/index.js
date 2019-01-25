const express = require('express');
const path = require('path');
const cors = require('cors');

const userRoutes = require('./routes/usuario');
const vueloRoutes = require('./routes/vuelo');
const billeteRoutes = require('./routes/billete');
const aerolineaRoutes = require('./routes/aerolinea');
const avionRoutes = require('./routes/avion');
const app = express();
const myConnection = require('express-myconnection');
const mysql = require('mysql');

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'airhockey'
}, 'single'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/user', userRoutes);
app.use('/vuelo', vueloRoutes);
app.use('/billete', billeteRoutes);
app.use('/avion', avionRoutes);
app.use('/aerolinea', aerolineaRoutes);

app.use(express.static(path.join(__dirname, '../cliente/public')));

app.listen(app.get('port'), function () {

});