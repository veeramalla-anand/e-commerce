const router = require('express').Router()
const userControl = require('../controllers/userController')
router.post('/register',userControl.register)


module.exports = router