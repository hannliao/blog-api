const { Router } = require('express');
const router = Router();
const controller = require('../controllers/comments');
// const passport = require('../auth/passport');

router.get('/:postId/comments', controller.getComments);
router.post('/:postId/comments', controller.createComment);
// router.delete('/:id', controller.deleteComment);

module.exports = router;
