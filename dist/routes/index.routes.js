"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task.controller");
//importa un metodo del modulo express 

//extraes todas las funciones del controlador de la base de datos

//inicializa la funcion Router en la constante router
var router = (0, _express.Router)();
router.get("/", _task.renderIndex); //trae la ruta para hacer uso de la funcion de ese archivo index

router.post("/task/add", _task.addUser); //trae la ruta para hacer uso de la funcion de addUser y tomar los datos para agregar nuevos datos

router.get("/edit/:id", _task.renderTaskEdit); //trae la ruta para hacer uso de la funcion renderTaskEdit 

router.post("/edit/:id", _task.editTask); //trae la ruta para hacer uso de la funcion editTask

router.get("/delete/:id", _task.deleteTask); //trae la ruta para hacer uso de la funcion deleteTask
var _default = router; //automaticamente exporta la funcion en especifico seleccionada, lo que se quiere realizar
exports["default"] = _default;