const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a tour title'],
        unique: true,
        trim: true
    },
    location: {
        type: String,
        required: [true, 'Please add a location']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    distance: {
        type: Number,
        required: [true, 'Please add distance']
    },
    image: {
        type: String,
        required: [true, 'Please add a photo']
    },
    desc: {
        type: String,
        required: [true, 'Please add a description']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    rating: {
        type: Number,
        default: 4.5
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'Please add max group size']
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tour', tourSchema);
