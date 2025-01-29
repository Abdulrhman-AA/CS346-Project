const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/restaurant';

mongoose.connect(uri)
    .then(() => console.log('Connected to local MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));