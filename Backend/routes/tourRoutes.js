const express = require('express');
const {
    getTours,
    getFeaturedTours,
    getSingleTour,
    createTour,
    updateTour,
    deleteTour
} = require('../controllers/tourController');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(getTours)
    .post(protect, authorize('admin'), createTour);

router.get('/search/getFeaturedTours', getFeaturedTours);

router.route('/:id')
    .get(getSingleTour)
    .put(protect, authorize('admin'), updateTour)
    .delete(protect, authorize('admin'), deleteTour);

module.exports = router;
