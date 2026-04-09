const Tour = require('../models/Tour');

// @desc    Get all tours
// @route   GET /api/tours
// @access  Public
exports.getTours = async (req, res) => {
    console.log('GET /api/v1/tours called');
    try {
        const tours = await Tour.find();
        res.status(200).json({
            success: true,
            count: tours.length,
            data: tours
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get featured tours
// @route   GET /api/tours/search/getFeaturedTours
// @access  Public
exports.getFeaturedTours = async (req, res) => {
    console.log('GET /api/v1/tours/search/getFeaturedTours called');
    try {
        const tours = await Tour.find({ featured: true }).limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            data: tours
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Search tours by location, distance, max group size
// @route   GET /api/tours/search/getTourBySearch
// @access  Public
exports.getTourBySearch = async (req, res) => {
    // here 'i' means case insensitive
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        // Build query object dynamically based on provided inputs
        const query = {};
        if (req.query.city) query.location = city;
        if (!isNaN(distance)) query.distance = { $gte: distance };
        if (!isNaN(maxGroupSize)) query.maxGroupSize = { $gte: maxGroupSize };

        const tours = await Tour.find(query);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

// @desc    Get single tour
// @route   GET /api/tours/:id
// @access  Public
exports.getSingleTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ success: false, message: 'Tour not found' });
        }
        res.status(200).json({ success: true, data: tour });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Create new tour
// @route   POST /api/tours
// @access  Private/Admin
exports.createTour = async (req, res) => {
    try {
        const tour = await Tour.create(req.body);
        res.status(201).json({ success: true, data: tour });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Update tour
// @route   PUT /api/tours/:id
// @access  Private/Admin
exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!tour) {
            return res.status(404).json({ success: false, message: 'Tour not found' });
        }
        res.status(200).json({ success: true, data: tour });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Delete tour
// @route   DELETE /api/tours/:id
// @access  Private/Admin
exports.deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) {
            return res.status(404).json({ success: false, message: 'Tour not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
