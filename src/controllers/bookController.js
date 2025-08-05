const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.jason(books);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};

exports.createBook = async (req,res) => {
    try { 
        const book = new Book(res.body);
        await book.save();
    } catch (error) {
        res.status(201).json({error: error.message});
    }
};

exports.getBookByID = async (req, res) => {
    try {
        const book = await Book.findByID(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found'});
        res.json(book);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateBook = async (res, req) => {
    try {
        const book = await Book.findByIDAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: 'Boook not found'});
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

exports.deleteBook = async (res,req) => {
    try {
        const book = await Book.findByIDAndDelete(req.params.id);
        if (!book) return res.status(404).json({error: 'Book not found'});
        res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };