import app from "./app"; //importa el archivo app.js donde se tienen las vistas y plantilla en general
import './database'//importa el archivo de database.js donde se tiene las conexiones a la base da datos

import { PORT } from  "./config";


app.listen(PORT);//La función se utiliza para enlazar y escuchar las conexiones en el host y el puerto especificados.
console.log("server on port", PORT); //mostrar en consola el puerto al que esta conectado
