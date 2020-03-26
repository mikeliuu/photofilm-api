const apiRouter = require('express').Router();

const filmsRouter = require('./api/filmsRouter');
const brandRouter = require('./api/brandRouter');
const postsRouter = require('./api/postsRouter');
const authRouter = require('./api/authRouter');

apiRouter.use('/films', filmsRouter);
apiRouter.use('/brands', brandRouter);
apiRouter.use('/posts', postsRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;