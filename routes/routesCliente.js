const express = require('express');
const routes = express.Router();

// ============ Consultar datos ========
routes.get('/', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);

        conn.query('SELECT * FROM cliente', (err,rows) => {
            if(err) return response.send(err);

            response.json(rows);
        });
    });
});

routes.get('/:id', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('SELECT * FROM cliente WHERE correo = ?',[request.params.id],(err,rows) => {
            if(err) return response.send(err);
            response.json(rows);
        });
    });
});

routes.get('/:id', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('SELECT * FROM cliente WHERE correo = ?',[request.params.id],(err,rows) => {
            if(err) return response.send(err);
            response.json(rows);
        });
    });
});

// ============ Agregar datos ========
routes.post('/', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('INSERT INTO cliente set ?',[request.body],(err,rows) => {
            if(err) return response.send('NO');

            response.json(rows.affectedRows);
        });
    });
});

// ============ Eliminar datos ========
routes.delete('/:id', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('DELETE FROM cliente WHERE correo = ?',[request.params.id],(err,rows) => {
            if(err) return response.send(err);
            response.json(rows);
        });
    });
});

// ============ Actualizar datos ========
routes.put('/:id', (request,response) => {
    request.getConnection((err,conn)=>{
        if(err) return response.send(err);
        conn.query('UPDATE cliente SET ? WHERE correo = ?',[request.body,request.params.id],(err,rows) => {
            if(err) return response.send(err);
            response.json(rows);
        });
    });
});

module.exports = routes;