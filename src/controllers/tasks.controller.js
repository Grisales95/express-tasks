const {
  getAlltasks,
  getTasksById,
  addTasks,
  deleteTask,
  putTask,
} = require('../services/tasks.services');

const getTaskCtrl = async (req, res) => {
  try {
    const tasks = await getAlltasks();
    res.json(tasks);
  } catch (error) {
    console.log('error en el controlador', error);
  }
};

const getTasksByIdCtrl = async (req, res) => {
  try {
    const tasksID = await getTasksById();
    const id = req.params.id;
    const task = tasksID.find((task) => task.id === id);
    res.json(task);
  } catch (error) {
    next(error);
  }
};

const addTaskCtrl = async (req, res) => {
  try {
    let body = req.body;
    const tasks = await addTasks(body);
    res.status(201).json({
      message: 'se agrego la tarea correctamente',
    });
  } catch (error) {
    next(error);
  }
};

const putTaskCtrl = async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  try {
    await putTask(id, task);
    res.status(201).json({
      message: 'la tarea se ha actualizado correctamente',
    });
  } catch (error) {
    next(error);
  }
};

const deleteTaskCtrl = async (req, res) => {
  try {
    const idTask = req.params.id;
    await deleteTask(idTask);
    res.json({
      message: 'se ha eliminado la tarea correctamente',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTaskCtrl,
  getTasksByIdCtrl,
  addTaskCtrl,
  deleteTaskCtrl,
  putTaskCtrl,
};
