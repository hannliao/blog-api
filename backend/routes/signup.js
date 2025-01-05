const { Router } = require('express');
const router = Router();
const controller = require('../controllers/signup');

router.post('/', controller.signupPost);

module.exports = router;
