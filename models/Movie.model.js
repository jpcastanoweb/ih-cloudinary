/* IMPORTACTIONES */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/* SCHEMA */

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
)

/* MODELO */
const Movie = mongoose.model("Movie", movieSchema)

/* EXPORTACION */
module.exports = Movie
