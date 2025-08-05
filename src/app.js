const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const bookRoutes = require('.routes/books');

const app = express();

//middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

//routes
app.use('api/books', bookRoutes);

//health check 
app.get('/health', (req, res) => {
    res.status(200).json({status: 'OK', timestamp: new Date(). toISOString() });
});
//Error handling
app.use((err, req ,res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.export = app;

