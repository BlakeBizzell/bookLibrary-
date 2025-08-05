const app = require(' ./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/booklib';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`); 
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));