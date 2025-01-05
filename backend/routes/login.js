const { Router } = require('express');
const router = Router();
const controller = require('../controllers/login');

router.post('/', controller.loginPost);

module.exports = router;
