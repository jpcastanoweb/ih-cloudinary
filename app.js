//PATRON DE DISEÑO - BAJO EL PARADIGNA DE PROGRAMACION FUNCIONAL

/* IMPORTACIONES */
const express = require("express")
const app = express()

// const router = express.Router()
const conectarDB = require("./config/db")
// Ejecutar variables de entorno
require("dotenv").config()

/* MIDDLEWARES */

//Conectar a base de datos
conectarDB()

app.set("view engine", "hbs")

/* ROUTES */

// Movies Routes
app.use("/movies", require("./routes/movie.routes"))
// Home Routes
app.use("/", require("./routes/index.routes"))

/* SERVER */
app.listen(process.env.PORT, () => {
  console.log("Escuchando en el puerto: ", process.env.PORT)
})
