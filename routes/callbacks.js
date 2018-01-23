const userlist = require('../models/userlist');

const callbackObject = {};

callbackObject.renderHomepage = (req, res) => res.render('home');

callbackObject.renderUsersPage = (req, res) => res.render('users', { userlist });

callbackObject.addNewUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const age = req.body.age;
    const id = userlist.length;

    const newUser = {
        firstName, lastName, email, age, id,
    };

    userlist.push(newUser);
    res.redirect('/users');
};

callbackObject.updateUser = (req, res) => {
    const userToEdit = userlist.find(user => user.id == req.params.id);
    userToEdit.firstName = req.body.firstName;
    userToEdit.lastName = req.body.lastName;
    userToEdit.email = req.body.email;
    userToEdit.age = req.body.age;
    
    res.redirect('/users');
};


callbackObject.deleteUser = (req, res) => {
  delete userlist[req.params.id];
  res.redirect('/users');
};


module.exports = callbackObject;
