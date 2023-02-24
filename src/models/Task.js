import { Schema, model } from "mongoose";//exporta el modulo esquema y el modelo

//funcion que crea el esquema, del como lo recibe la base de datos
const taskSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true
    },
    correo: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    telefono: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    edad: {
      type: Number,
      required: true,
      trim: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

//exporta el modelo(esquema) que acabamos de hacer
export default model("usuario", taskSchema);
