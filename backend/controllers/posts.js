const prisma = require('../prisma/prisma');

exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany();
    res.status(200).json(allPosts);
    console.log('This is the getAllPosts route');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPostById = async (req, res) => {
  const postId = parseInt(req.params.id);

  if (isNaN(postId)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  try {
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
      return res.status(500).json({ error: 'Post not found' });
    }
    console.log('This is the getPostById route');
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getPostByTitle = async (req, res) => {
  const { username, postTitle } = req.params;
  try {
    const post = await prisma.post.findFirst({
      where: {
        title: postTitle,
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        comments: true,
      },
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    return res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content, isPublished } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        isPublished: isPublished === 'true',
        userId: req.user.id,
      },
    });
    console.log('This is the createPost route');
    return res
      .status(201)
      .location(`posts/${post.id}`)
      .json({ message: 'Post saved successfully', post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content, isPublished } = req.body;
    const published = isPublished === 'true';
    const post = await prisma.post.update({
      data: {
        title,
        content,
        isPublished: published,
        userId: req.user.id,
      },
    });
    console.log('This is the updatePost route');
    return res
      .status(201)
      .location(`posts/${post.id}`)
      .json({ message: 'Post saved successfully', post });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
