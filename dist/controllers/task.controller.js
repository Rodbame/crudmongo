"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTaskEdit = exports.renderIndex = exports.editTask = exports.deleteTask = exports.addUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Task = _interopRequireDefault(require("../models/Task"));
//importa el modelo que va a seguir que trae el esquema de la estructura 

//llama al index, lo trae y lo renderiza 
var renderIndex = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Task["default"].find().lean();
        case 2:
          tasks = _context.sent;
          res.render("index", {
            tasks: tasks
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderIndex(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//renderiza el archivo de la funcion de insertar en la bd
exports.renderIndex = renderIndex;
var addUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var task, taskSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          task = (0, _Task["default"])(req.body);
          _context2.next = 4;
          return task.save();
        case 4:
          taskSaved = _context2.sent;
          res.redirect("/");
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function addUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
// renderiza el archivo de la funcion de editar 
exports.addUser = addUser;
var renderTaskEdit = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Task["default"].findById(req.params.id).lean();
        case 3:
          task = _context3.sent;
          res.render("edit", {
            task: task
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function renderTaskEdit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
//se encarga de tomar el id y actualizar y redireccionar al index
exports.renderTaskEdit = renderTaskEdit;
var editTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Task["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function editTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
//se encarga de tomar el id y borrar y redireccionar al index
exports.editTask = editTask;
var deleteTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return _Task["default"].findByIdAndDelete(id);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteTask = deleteTask;