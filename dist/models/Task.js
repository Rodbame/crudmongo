"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
//exporta el modulo esquema y el modelo

//funcion que crea el esquema, del como lo recibe la base de datos
var taskSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  telefono: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  edad: {
    type: Number,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

//exporta el modelo(esquema) que acabamos de hacer
var _default = (0, _mongoose.model)("usuario", taskSchema);
exports["default"] = _default;