/* IMPORTACIONES */
const express = require("express")
const router = express.Router()
const movieController = require("./../controllers/movieController")

/* ROUTE */
router.get("/create", movieController.createMovie)

module.exports = router
