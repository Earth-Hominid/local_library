const express = require('express');
const router = express.Router;

// Require controller modules

const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTERS ///

// GET catalog home page.
router.get('/', book_controller).index;

// GET request for creating a Book. NOTE! This must come before routes that display Book (uses id).

router.get('/book/create', book_controller.book_create_get);

// POST request for creating Book.
router.post('/book/create', book_controller.book_create_post);

// GET request to delete Book.
router.get('/book/:id/delete', book_controller.book_delete_post);

// POST request to delete Book.
router.post('/book/:id/delete', book_controller.book_delete_post);

// Get request to update Book.
router.post('/book/:id/update', book_controller.book_update_get);

//POST request to update Book
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one Book.
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);