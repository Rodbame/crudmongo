const mongoose = require("mongoose"); //modulo que permite conectar a Mongodb

main().catch((err) => console.log(err)); //try catch para que muestre los errores de conexion si llegan a haber

//Funcion que permite entrar a mongo y a la base de datos en especifico por medio de Mongo Atlas
async function main() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb+srv://rodbame:crud123@crud.cznuowy.mongodb.net/usuarios_bd?retryWrites=true&w=majority");
    console.log("Connected to mongo");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.error(error);
  }
}
