const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createPost, getFeed, likeToggle } = require('../controllers/postController');


router.post('/', auth, createPost);
router.get('/', auth, getFeed);
router.post('/:id/like', auth, likeToggle);


module.exports = router;