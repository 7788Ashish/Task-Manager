const express = require('express')
const router = express.Router();
const Task = require('../models/Task')
const taskController = require('../controllers/taskController')

//create task
router.post('/task',taskController.createTask)

//Get all task
router.get('/task',taskController.getallTask)

//Edit task
router.put('/task/:id',taskController.updateTask)

//Delete task
router.delete('/task/:id',taskController.deleteTask)

module.exports = router;