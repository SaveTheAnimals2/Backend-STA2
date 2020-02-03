const express = require('express');
const router = require('express').Router();

const Users = require('./usersModel.js');
const restricted = require('../auth/restricted.js');

router.get('/', restricted, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send('users not found'));
  });
  

module.exports = router;