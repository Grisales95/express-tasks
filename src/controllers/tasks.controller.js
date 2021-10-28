const {
  getAlltasks,
  getTasksById,
  addTasks,
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
    const id = Number(req.params.id);
    const task = tasksID.find((task) => task.id === id);
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

const addTaskCtrl = async (req, res) => {
  try {
    let body = req.body;
    const tasks = await addTasks(body);
    console.log(body);
    res.json({
      message: 'se agrego la tarea correctamente',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTaskCtrl,
  getTasksByIdCtrl,
  addTaskCtrl,
};
