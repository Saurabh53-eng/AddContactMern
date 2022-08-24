const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrementModelID = require('./counterModel');

const todoSchema = new Schema({
  userId:{type:String,required:true},
  id: { type: Number, min: 1 },
  title: { type: String, unique: true, required: true },
  completed:{type:Boolean},
  stories: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

// todoSchema.pre('save', function (next) {
//   if (!this.isNew) {
//     next();
//     return;
//   }
//   autoIncrementModelID('activities', this, next);
// });
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo