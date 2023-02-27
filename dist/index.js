"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database");
var _config = require("./config");
//importa el archivo app.js donde se tienen las vistas y plantilla en general
//importa el archivo de database.js donde se tiene las conexiones a la base da datos

_app["default"].listen(_config.PORT); //La función se utiliza para enlazar y escuchar las conexiones en el host y el puerto especificados.
console.log("server on port", _config.PORT); //mostrar en consola el puerto al que esta conectado