const { validationResult } = require('express-validator');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.loginPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Invalid username or password',
      errors: errors.array(),
    });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json({
        message: 'Authentication failed',
        errors: [{ msg: info.message }],
      });
    }

    // user is authenticated; issue a JWT token
    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user.id, username: user.username },
      redirect: '/',
    });
  })(req, res, next);
};
