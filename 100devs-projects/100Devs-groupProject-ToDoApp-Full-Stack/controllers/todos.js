const Todo = require('../models/Todo')
const List = require('../models/List')

module.exports = {
  getTodos: async (req, res) => {
    console.log(req.user)
    try {
      const todoList = await List.distinct("listName", { userId: req.user._id })
      const todoItems = await Todo.find({ userId: req.user.id}) //, listName: req.body.listName 
      const itemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false })
      res.render('todos.ejs', { todos: todoItems, left: itemsLeft, user: req.user, listName: todoList  }) //, listName: req.body.listName
    } catch (err) {
      console.log(err)
    }
  },
  getTaskList: async (req, res) => {
    console.log(req.user)
    try {
      const todoItemLists = await List.distinct("listName", { userId: req.user._id })
      res.render('taskList.ejs', { listName: todoItemLists, user: req.user })
    } catch (err) {
      console.log(err);
    }
  },
  getFilteredTodoList: async (req, res) => {
    const { listname } = req.params
    try {
      const list = await List.find({listName: listname,userId: req.user.id})
      const todoItems = await Todo.find({listName: listname , userId: req.user.id})
      const itemsLeft = await Todo.countDocuments({ listName: listname, userId: req.user.id, completed: false })
      res.render('filteredTodos.ejs', { todos: todoItems, left: itemsLeft, user: req.user, listName: listname, list: list })
      } catch (err) {
      console.log(err);
    }
  },
    createListName: async (req, res ) => {
    try {
      await List.create({listName: req.body.listName, userId: req.user.id})
      res.redirect('back')
      console.log('in todos!')
    } catch (err) {
      console.log(err)
    }
  },
  createFromFilteredTodoList: async (req, res) => {
    try {
      await Todo.create({ todo: req.body.todoItem, completed: false, userId: req.user.id, listName: req.body.listName})
      const todoItems = await Todo.find({listName:req.body.listName , userId: req.user.id})
      const itemsLeft = await Todo.countDocuments({ listName: req.body.listName, userId: req.user.id, completed: false })
      console.log('Todo has been added!')
      res.redirect('back')
    } catch (err) {
      console.log(err)
    }
  },
  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        completed: true
      })
      console.log('Marked Complete')
      res.json('Marked Complete')
    } catch (err) {
      console.log(err)
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
        completed: false
      })
      console.log('Marked Incomplete')
      res.json('Marked Incomplete')
    } catch (err) {
      console.log(err)
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile)
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
      console.log('Deleted Todo')
      res.json('Deleted It')
    } catch (err) {
      console.log(err)
    }
  }
}