const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.get('/taskList', todosController.getTaskList)

// test
router.get('/:listname', todosController.getFilteredTodoList)

router.get('/getTask', todosController.getFilteredTodoList)

router.post('/createFromFilteredTodoList', todosController.createFromFilteredTodoList)
// test

router.post('/list', todosController.createListName)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

// router.post('/createTodo', todosController.createTodo)

module.exports = router
