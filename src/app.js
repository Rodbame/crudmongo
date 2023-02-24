//modulos que se utilizan   
import express from "express"; //uso de exppressjs para los metodos de llamada
import indexRoutes from "./routes/index.routes"; //obtener rutas
import { create } from 'express-handlebars'; //se utiliza para iterar los objetos
import path, { dirname } from "path"; //recibir las rutas de las vistas y recursos
import morgan from "morgan";//recibe las solicitudes http


const app = express(); //creacion de la aplicacion HTML dinamica

//usar los modulos importados del handlebars para saber cuales se utlizan 
app.set('views', path.join(__dirname, 'views'));
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs", 
}) 
//
app.engine(".hbs",hbs.engine);//registra la devolución de llamada de la plantilla
app.set("view engine", ".hbs");//Express carga el módulo de la plantilla o vista internamente

//middleware inicializa la peticion 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Routes & rutas para que la aplicacion use la ruta
app.use(indexRoutes);

// Statics files archivos estaticos, como diseños, plantillas etc.
app.use(express.static(path.join(__dirname, "public")));

export default app;
