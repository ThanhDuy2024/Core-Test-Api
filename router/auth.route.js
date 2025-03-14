const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller');

router.get('/user', controller.users);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/me', controller.me);

module.exports = router