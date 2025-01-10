const prisma = require('../prisma/prisma');
const slugify = require('../utils/slugify');

exports.getPosts = async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany({
      orderBy: {
        timestamp: 'desc',
      },
    });
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content, isPublished, userId, username } = req.body;
    const slug = slugify(title);
    const post = await prisma.post.create({
      data: {
        title,
        content,
        isPublished,
        slug,
        userId,
        username,
      },
    });
    return res.status(201).json({ message: 'Post saved', post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const { title, content, isPublished } = req.body;
    const newSlug = slugify(title);
    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        content,
        isPublished,
        slug: newSlug,
        timestamp: new Date(),
      },
    });
    return res.status(201).json({ message: 'Post saved', post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    await prisma.post.delete({
      where: { id: postId },
    });
    return res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
