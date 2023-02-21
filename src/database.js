const mongoose = require("mongoose");

main().catch((err) => console.log(err));

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
