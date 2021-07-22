/* IMPORTS */
const express = require("express")
const router = express.Router()
const indexController = require("./../controllers/indexController")

/* ROUTES */

router.get("/", indexController.homeInit)

/* EXPORTS */
module.exports = router
