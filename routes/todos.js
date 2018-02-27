var express = require('express');
var router = express.Router();

var todos = [
  {
    id: 1,
    title: "First Todo",
    body: "This is a todo item."
  }
]

/* POST todo */
router.post('/', function(req, res, next) {
  const newTodo = makeTodo(req.body)
  todos = todos.concat(newTodo)
  res.json({
    data: {
      todo: newTodo
    },
    message: "Successfully created todo."
  })
})

/* GET todos */
router.get('/', function(req, res, next) {
  res.json({
    data: {
      todos: todos
    },
    message: "Successfully retrieved todos."
  })
})

/* GET todo */
router.get('/:id', function(req, res, next) {
  const todo = todos.filter(t => t.id === parseInt(req.params.id))
  res.json({
    data: {
      todo: todo
    },
    message: "Successfully retrieved todo."
  })
})

/* PUT todo */
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  const todosToUpdate = todos.filter(t => t.id === parseInt(id))
  if (todosToUpdate.length > 0) {
    const todo = updateTodo(todosToUpdate[0], req.body)
    todos = todos.concat(todo)
    res.json({
      data: {
        todo: todo
      },
      message: "Successfully updated todo."
    })
  } else {
    res.json({
      error: `No todo found with id: ${id}`
    })
  }
})

/* DELETE todo */
router.delete('/:id', function(req, res, next) {
  todos = todos.filter(t => t.id !== parseInt(req.params.id))
  res.json({
    data: {
      todos: todos
    },
    message: "Successfully deleted todo."
  })
})

function makeTodo(reqBody) {
  console.log(reqBody)
  const {title, body} = reqBody
  const id = todos.length + 1
  return Object.assign({}, {title, body, id: id})
}

function updateTodo(todo, reqBody) {
  console.log(todo)
  const {title, body} = reqBody
  return Object.assign({}, {title, body, id: todo.id})
}

module.exports = router;
