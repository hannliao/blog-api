const prisma = require('../prisma/prisma');

exports.getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user: { id: user.id, username: user.username } });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error retrieving user data', error: err.message });
  }
};