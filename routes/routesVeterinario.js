const express = require('express');
const routes = express.Router();

// ============ Consultar datos ========
routes.get('/', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);

        conn.query('SELECT * FROM veterinario', (err,rows) => {
            if(err) return response.send(err);

            response.json(rows);
        });
    });
});

routes.get('/:id', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('SELECT * FROM veterinario WHERE cedula = ?',[request.params.id],(err,rows) => {
            if(err) return response.send(err);
            response.json(rows);
        });
    });
});
module.exports = routes;