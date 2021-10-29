const fs = require('fs/promises');
const path = require('path');
const { nextTick } = require('process');
const uniqid = require('uniqid');

const taskPath = path.resolve(__dirname, '..', 'tasks.json');

const getAlltasks = async () => {
  try {
    const tasks = await fs.readFile(taskPath, 'utf8');
    return JSON.parse(tasks);
  } catch (error) {
    throw error;
  }
};

const getTasksById = async () => {
  try {
    const tasksID = await fs.readFile(taskPath, 'utf8');
    return JSON.parse(tasksID);
  } catch (error) {
    throw error;
  }
};

const addTasks = async (taskObj) => {
  try {
    const tasks = await getAlltasks();
    let generateID = uniqid();
    taskObj = {
      id: generateID,
      ...taskObj,
    };
    tasks.push(taskObj);
    await fs.writeFile(taskPath, JSON.stringify(tasks));
    return taskObj;
  } catch (error) {
    throw error;
  }
};

const putTask = async (id, task) => {
  try {
    const tasks = await getAlltasks();
    let taskIndex = tasks.findIndex((e) => e.id === id);
    let updateTask = {
      ...tasks[taskIndex],
      ...task,
    };
    tasks[taskIndex] = updateTask;
    await fs.writeFile(taskPath, JSON.stringify(tasks));
    return updateTask;
  } catch (error) {
    throw error;
  }
};

// const editTasks = async();

const deleteTask = async (id) => {
  try {
    const tasks = await getAlltasks();
    const newTaskArray = tasks.filter((task) => task.id !== id);
    await fs.writeFile(taskPath, JSON.stringify(newTaskArray));
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAlltasks,
  getTasksById,
  addTasks,
  deleteTask,
  putTask,
};
