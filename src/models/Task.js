import { Schema, model } from "mongoose";

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

export default model("usuario", taskSchema);
