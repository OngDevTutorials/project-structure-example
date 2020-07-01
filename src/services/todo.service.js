const TodoModel = require("../models/todo.model");
const TodoService = {};

TodoService.getAllTodos = async () => {
  return await TodoModel.find({});
};
