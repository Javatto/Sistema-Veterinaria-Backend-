const express = require('express');
const routes = express.Router();

// ============ Consultar datos ========
routes.get('/', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('SELECT * FROM mascota', (err,rows) => {
            if(err) return response.send(err);

            response.json(rows);
        });
    });
});

// ============ Agregar datos ========
routes.post('/', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('INSERT INTO mascota set ?',[request.body],(err,rows) => {
            if(err) return response.send(err);

            response.json(rows.affectedRows);
        });
    });
});


module.exports = routes;