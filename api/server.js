// Import dependencies 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter); 



// Route for initial server online status //
server.get('/', (req, res) => {
    res.status(200).json("Help Us Save The Animals!");
  });

module.exports = server;


