import { Router } from "express";//importa un metodo del modulo express 

//extraes todas las funciones del controlador de la base de datos
import {
  renderIndex,
  addUser,
  renderTaskEdit,
  editTask,
  deleteTask,
} from "../controllers/task.controller";

//inicializa la funcion Router en la constante router
const router = Router();

router.get("/", renderIndex);//trae la ruta para hacer uso de la funcion de ese archivo index

router.post("/task/add", addUser);//trae la ruta para hacer uso de la funcion de addUser y tomar los datos para agregar nuevos datos

router.get("/edit/:id", renderTaskEdit);//trae la ruta para hacer uso de la funcion renderTaskEdit 

router.post("/edit/:id", editTask);//trae la ruta para hacer uso de la funcion editTask

router.get("/delete/:id", deleteTask);//trae la ruta para hacer uso de la funcion deleteTask

export default router;//automaticamente exporta la funcion en especifico seleccionada, lo que se quiere realizar
