const express = require('express');
const router = express.Router();
const userController = require('../User/user.controller');

// Define routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.checkLoggedInUser);
router.post('/signup', userController.signup);


module.exports = router;
