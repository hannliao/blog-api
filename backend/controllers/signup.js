const { validationResult } = require('express-validator');
const signupValidator = require('../middleware/signupValidator');
const bcrypt = require('bcryptjs');
const prisma = require('../prisma/prisma');

exports.signupPost = [
  signupValidator,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Invalid username or password',
        errors: errors.array(),
      });
    }
    const { username, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: {
          username: username,
          password: hashedPassword,
        },
      });
      return res.status(200).json({
        message: 'Signup successful',
        redirect: '/login',
      });
    } catch (err) {
      console.error('Error creating user:', err);
    }
  },
];
