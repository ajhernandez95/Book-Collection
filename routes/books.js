const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../modals/Users');
const Book = require('../modals/Book');

// @route     GET /api/books
// @desc      Get user books from book collection
// @auth      PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const bookCollection = await Book.find({ user: req.user.id });
    res.json(bookCollection);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route     POST /api/books
// @desc      Add a book to users book collection
// @auth      PRIVATE
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is missing').exists(),
      check('author', 'Author is missing').exists(),
      check('desc', 'Description is missing').exists()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { title, author, desc } = req.body;

    try {
      let book = await Book.findOne({ title, author });

      if (book) {
        return res.status(400).json({ msg: 'Book already exist' });
      }

      book = new Book({
        user: req.user.id,
        title,
        author,
        desc
      });

      await book.save();

      res.send('Book successfully added');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT /api/books
// @desc      Update user book from book collection
// @auth      PRIVATE
router.put('/:id', auth, (req, res) => {
  const { title, author, desc } = req.body;
});

// @route     DELETE /api/books
// @desc      Delete a users book from book collection
// @auth      PRIVATE
router.delete('/:id', auth, (req, res) => {
  res.send('delete');
});

module.exports = router;
