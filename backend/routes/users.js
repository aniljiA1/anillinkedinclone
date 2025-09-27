const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, followToggle } = require('../controllers/userController');


router.get('/:id', auth, getProfile);
router.post('/:id/follow', auth, followToggle);


module.exports = router;