const express = require('express');
const router = require('express').Router();
const bcrypt = require('bcryptjs');

const token = require('./token.js');
const db = require('../database/dbConfig.js');

// New user registration //
router.post('/register', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({ error: "Couldn't add new user" });
      });
  });
  
  // User login //
  router.post('/login', (req, res) => {
    // implement login
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          
          const getToken = token.generateToken(user); 
        
          res.status(200).json({ getToken }); 
        } else {
          res.status(401).json({ message: 'Please provide the correct username and password' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: "There was an error logging in "});
      });
  });

module.exports = router;