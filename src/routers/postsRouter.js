const postsRouter = require('express').Router();
const postsCTL = require('../controllers/postsController');

postsRouter.get('/:tag', postsCTL.fetchPosts);

module.exports = postsRouter;