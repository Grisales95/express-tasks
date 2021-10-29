const { Router } = require('express');
const {
  getTaskCtrl,
  getTasksByIdCtrl,
  addTaskCtrl,
  deleteTaskCtrl,
  putTaskCtrl,
} = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTaskCtrl); //obtener lista de tareas

router.get('/tasks/:id', getTasksByIdCtrl); //obtener listas de tareas por id

router.post('/tasks', addTaskCtrl);
router.put('/tasks/:id', putTaskCtrl);
router.delete('/tasks/:id', deleteTaskCtrl);
module.exports = router;
