const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, require: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true},
    publishedDate: Date,
    genre: String,
    description: String,
    rating: {type: Number, min: 1, max: 5}
}, {timestamps: true });
mongoose.export = mongoose.model('Book', bookSchema);