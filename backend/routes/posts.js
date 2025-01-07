const { Router } = require('express');
const router = Router();
const controller = require('../controllers/posts');

router.get('/', controller.getAllPosts);
// router.get('/:id', controller.getPostById);
// router.get('/:username/:postTitle', controller.getPostByTitle);
// router.post('/', controller.createPost);
// router.put('/:id', controller.updatePost);
// router.delete('/:id', controller.deletePost);

module.exports = router;
