const express = require('express');
const passport = require('passport')
const User = require('../models/UserSchema');
const authController = require('../controllers/authController');
// const authCheck = require('../middleware/authCheck');
// const authCheck = require('../passportMiddleware/passport');

const router = express.Router();

router.post('/login', authController.user_login );
router.post('/signup', authController.user_login );



module.exports = router;