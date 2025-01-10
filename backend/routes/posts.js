const { Router } = require('express');
const router = Router();
const controller = require('../controllers/posts');
const passport = require('../auth/passport');

router.get('/', controller.getPosts);
// router.get('/:id', controller.getPostById);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  controller.createPost
);
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  controller.updatePost
);
// router.delete('/:id', controller.deletePost);

module.exports = router;
