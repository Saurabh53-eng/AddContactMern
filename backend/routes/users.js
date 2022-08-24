const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find({})
  .populate('todos').exec((err,todos)=>{
    res.json(todos)
  })
});

router.route('/:id').get((req, res) => {
  User.find({id:req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const id=req.body.id;
  const name = req.body.name;
  const email=req.body.email;
  const phone=req.body.phone;
  const newUser = new User({id,name,email,phone});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;