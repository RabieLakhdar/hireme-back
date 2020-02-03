const express = require("express")
const dataController = require('../controller/data')
const router = express.Router()
//const checkAuth = require("../middleware/auth")

router.get('/gender', dataController.getAllgender)
router.get('/duration', dataController.getAllDurtion)
router.get('/price-duration', dataController.getAllPriceByDuration)
router.post('/addsheet', dataController.getSheet)

module.exports = router