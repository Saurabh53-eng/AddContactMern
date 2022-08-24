const router = require('express').Router();
let Todo = require('../models/addTodo.model');

router.route('/').get((req, res) => {
  Todo.find()
    .then(Todos => res.json(Todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Todo.find({id:req.params.id})
    .then(Todo => res.json(Todo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const userId=req.body.userId;
  const id=req.body.id;
  const title=req.body.title;
  const completed=req.body.completed;
  const newTodo = new Todo({userId,id,title,completed});
  newTodo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;