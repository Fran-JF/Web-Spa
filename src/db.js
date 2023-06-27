//Importamos mongoose
import mongoose from "mongoose";


//Creamos la conexion a la base de datos en una funcion, dentro de un bloque try para el manjeo de errores
export const connectarDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017");
        console.log("MongoDB ha sido conectada exitosamente");
    } catch (error) {
        console.error(error);
    }
};