const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = "mongodb+srv://bandsaurabh:7AQ2c1QU2Gxb1rVC@cluster0.bjvzk.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const userRouter = require('./routes/users');
const todoRouter = require('./routes/addTodos')

app.use('/user', userRouter);
app.use('/todos', todoRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});