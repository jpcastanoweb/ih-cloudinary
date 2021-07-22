const mongoose = require("mongoose")
require("dotenv").config()

//Middleware
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })

    console.log("Base de datos conectada")
  } catch (error) {
    console.log(error)
  }
}

//ESPORTACION
module.exports = conectarDB
