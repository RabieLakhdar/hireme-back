const express = require("express")
const dataController = require('../controller/data')
const router = express.Router()
//const checkAuth = require("../middleware/auth")

router.get('/genders', dataController.getAllgender)


module.exports = router