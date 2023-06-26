//Inportamos app desde el archivo app
import app from "./app.js";
//importamos la conexion con la base de datos
import { connectarDB } from "./db.js";

connectarDB();
app.listen(3000)
console.log("server en puerto", 3000);