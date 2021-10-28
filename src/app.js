const express = require('express');
const { errorHandler } = require('./middlewares/error.middleware');
const taskRouters = require('./routes/tasks.routers');
const app = express();

app.use(express.json());

app.use(taskRouters);

//middleware para manejo de errores

//next usos
//1.continuar con la ejecución del siguente middleware
//2.Mandar un error el middleware para el manejo de errores(siempre y cuando tenga un argumento)

app.use(errorHandler);
module.exports = app;
