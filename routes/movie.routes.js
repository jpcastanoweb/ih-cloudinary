/* IMPORTACIONES */
const express = require("express")
const router = express.Router()
const movieController = require("./../controllers/movieController")
const fileUploader = require("./../config/cloudinary.config")

/* ROUTE */
router.get("/", movieController.listMovies)
router.get("/create", movieController.createMovie)

router.post(
  "/create",
  fileUploader.single("movie-cover-image"),
  movieController.processNewMovie
)

router.get("/:id/edit", movieController.editMovie)
router.post(
  "/:id/edit",
  fileUploader.single("movie-cover-image"),
  movieController.updateMovie
)

/* EXPORTS */
module.exports = router
