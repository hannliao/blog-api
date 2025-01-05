const { Router } = require('express');
const router = Router();
const controller = require('../controllers/posts');

router.get('/posts', controller.getAllPosts);
// router.get('/:id', controller.getPostById);
router.get('/:username', controller.getPostByTitle);
router.post('/', controller.createPost);
router.put('/:id', controller.updatePost);
// router.delete('/:id', controller.deletePost);

module.exports = router;
