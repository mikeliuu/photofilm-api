const apiRouter = require('express').Router();
const verify = require('../services/verifyToken').verifyToken;

const filmsRouter = require('./filmsRouter');
const brandRouter = require('./brandRouter');
const postsRouter = require('./postsRouter');
const authRouter = require('./authRouter');
const usersRouter = require('./usersRouter');

apiRouter.use('/films', filmsRouter);
apiRouter.use('/brands', brandRouter);
apiRouter.use('/posts', postsRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/users', verify, usersRouter);

module.exports = apiRouter;