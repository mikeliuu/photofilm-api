const usersRouter = require('express').Router();
const usersCTL = require('../controllers/usersController');

usersRouter.get('/', usersCTL.getUsers);


module.exports = usersRouter;