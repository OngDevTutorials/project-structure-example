const express = require("express");
import todoRouter from "./todo.routes";

const apiRoute = express();

apiRoute.use("/todo", todoRouter);

export default apiRoute;
