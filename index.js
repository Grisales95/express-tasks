// const express = require('express');
// const morgan = require('morgan');
// const fs = require('fs');
// const app = express();

// const PORT = 8000;

// //middlewares =  es una funcion que hace de intermediario entre petición y respuesta hacia el cliente.

// //middlware incorporado ( built -in)
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// //middleware de terceros
// app.use(morgan('dev'));
// ///middleware de aplicacion(application)
// app.get('/', (req, res) => {
//   console.log(req.query); //obteners querys para filtrar datos
//   res.send('Hola mundo desde express :)');
// }); // peticiones tipo get

// app.get('/tasks', (req, res) => {
//   res.json({
//     name: 'Johanny',
//     age: 26,
//   });
// });

// app.post('/tasks', (req, res) => {
//   console.log(req.body);
//   res.send('Datos recibidos');
// });

// app.put('/tasks/:id', (req, res) => {
//   console.log(req.params.id);
// });

// app.delete('tasks/:id', (req, res) => {
//   console.log(req.params);
// });

// app.listen(PORT, () => {
//   console.log(`servidor sobre el puerto ${PORT}`);
// });
