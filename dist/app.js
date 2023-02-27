"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _expressHandlebars = require("express-handlebars");
var _path = _interopRequireWildcard(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//modulos que se utilizan   
//uso de exppressjs para los metodos de llamada
//obtener rutas
//se utiliza para iterar los objetos
//recibir las rutas de las vistas y recursos
//recibe las solicitudes http

var app = (0, _express["default"])(); //creacion de la aplicacion HTML dinamica

//usar los modulos importados del handlebars para saber cuales se utlizan 
app.set('views', _path["default"].join(__dirname, 'views'));
var hbs = (0, _expressHandlebars.create)({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs"
});
//
app.engine(".hbs", hbs.engine); //registra la devolución de llamada de la plantilla
app.set("view engine", ".hbs"); //Express carga el módulo de la plantilla o vista internamente

//middleware inicializa la peticion 
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));

//Routes & rutas para que la aplicacion use la ruta
app.use(_index["default"]);

// Statics files archivos estaticos, como diseños, plantillas etc.
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = app;
exports["default"] = _default;