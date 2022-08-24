const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id:{
    type:String,min:2, required:true
  },
  name:{type: String,unique:true,required: true
  },
  email:{type:String,unique:true,required: [true, 'You have to enter an email']
  },
  phone:{type:String,unique:true,maxLength: 12,required:true
  },
  todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
});
const User = mongoose.model('User', userSchema);

module.exports = User;