const mongoose = require("mongoose");

const { Schema } = mongoose;

const TodoShema = Schema({
  name: String,
});

const TodoModel = mongoose.model("Todos", TodoShema, "todos");

export default TodoModel;
