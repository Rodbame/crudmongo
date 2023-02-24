import Task from "../models/Task";//importa el modelo que va a seguir que trae el esquema de la estructura 

//llama al index, lo trae y lo renderiza 
export const renderIndex = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};
//renderiza el archivo de la funcion de insertar en la bd
export const addUser = async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
// renderiza el archivo de la funcion de editar 
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
}
//se encarga de tomar el id y actualizar y redireccionar al index
export const editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
}
//se encarga de tomar el id y borrar y redireccionar al index
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
}
