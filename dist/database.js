"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _config = require("./config");
var mongoose = require("mongoose"); //modulo que permite conectar a Mongodb

main()["catch"](function (err) {
  return console.log(err);
}); //try catch para que muestre los errores de conexion si llegan a haber

//Funcion que permite entrar a mongo y a la base de datos en especifico por medio de Mongo Atlas
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          mongoose.set("strictQuery", false);
          _context.next = 4;
          return mongoose.connect(_config.MONGODB_URI);
        case 4:
          console.log("Connected to mongo");
          // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _main.apply(this, arguments);
}