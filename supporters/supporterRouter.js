const express = require('express');
const router = require('express').Router();

const Supporter = require('./supporterModel');
const restricted = require('../auth/restricted.js');

router.get('/', restricted, (req, res) => {
    Supporter.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send('users not found'));
  });
  

module.exports = router;