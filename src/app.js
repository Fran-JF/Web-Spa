// Importamos y ejecutamos el express
import express from "express";
const app = express();
//Importamos morgan
import morgan from "morgan";


app.use(morgan("dev"));


// Exportamos la variable app
export default app