const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');
const routesCliente = require('./routes/routesCliente.js');
const routesMascota = require('./routes/routesMascota.js');
const routesVeterinario = require('./routes/routesVeterinario.js');

const app = express();
app.set('port', process.env.PORT || 9000);
app.use(express.json());
app.use(cors());

app.listen(app.get('port'),() => {
    console.log('server running on port',app.get('port'));
});

//================ conexion BD ============
const dbOptions = {
    port: 3306,
    host: 'localhost',
    user: 'admin',
    password: '123',
    database: 'veterinaria'
}
 
app.use(myconn(mysql,dbOptions,'single'));

//=================== routes ==============
app.get('/', (request, response) => {
    response.send('Servidor en marcha, sistema veterinaria');
}); 

app.use('/api/cliente',routesCliente)
app.use('/api/mascota',routesMascota);
app.use('/api/Veterinario',routesVeterinario);