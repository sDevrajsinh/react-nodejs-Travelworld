const express = require('express');
const { createBooking, getAllBooking, getBooking } = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/:id', protect, getBooking);
router.get('/', protect, authorize('admin'), getAllBooking);

module.exports = router;
