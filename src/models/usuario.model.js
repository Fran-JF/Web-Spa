// Importamos mongoose
import mongoose from "mongoose";

// Indicamos cuales son los datos y los tipos de datos q vamos a resivir del ususario
const userSchema = new mongoose.Schema(
    {
        // Nombre de usuario
        username: {
            type: String,
            required: true,
            // Eliminacion de espacios
            trim: true,
        },
        // Email
        email: {
            type: String,
            required: true,
            // Confirmacion que el email del usuario es unico
            unique: true,
        },
        // Contraseña
        password: {
            type: String,
            required: true,
        },
            },
    {
        timestamps: true,
    }
);

//Creamos el modelo de la coleccion de objetos (usuarios)
export default mongoose.model("User", userSchema);