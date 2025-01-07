require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('node:path');
const passport = require('./auth/passport');

const prisma = require('./prisma/prisma');
const session = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');

const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());

app.use(express.json()); // this parses the JSON body in POST requests
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use('/', authRouter);
app.use('/api/posts', postsRouter);
app.use(
  '/api/user',
  passport.authenticate('jwt', { session: false }),
  userRouter
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port`, PORT);
});
