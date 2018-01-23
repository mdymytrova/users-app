const express = require('express');

const router = express.Router();

const callback = require('./callbacks');


router.get('/', callback.renderHomepage);

// Get all users
router.get('/users', callback.renderUsersPage);

// Add new user
router.post('/users', callback.addNewUser);


// Update a user
router.post('/users/:id', callback.updateUser);


// Delete a user
router.post('/users/delete/:id', callback.deleteUser);


module.exports = router;