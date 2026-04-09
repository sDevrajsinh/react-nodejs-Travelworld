const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../models/Tour');

dotenv.config({ path: './.env' });

mongoose.connect(process.env.MONGO_URI);

const tours = [
    {
        title: "London",
        location: "UK",
        address: "Buckingham Palace",
        distance: 500,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600&h=400",
        desc: "Experience the magic of London.",
        price: 99,
        maxGroupSize: 10,
        featured: true
    },
    {
        title: "Paris",
        location: "France",
        address: "Eiffel Tower",
        distance: 400,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600&h=400",
        desc: "The city of love.",
        price: 120,
        maxGroupSize: 8,
        featured: true
    },
    {
        title: "Bali",
        location: "Indonesia",
        address: "Ubud",
        distance: 3000,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600&h=400",
        desc: "Tropical paradise.",
        price: 80,
        maxGroupSize: 15,
        featured: true
    },
    {
        title: "Tokyo",
        location: "Japan",
        address: "Shibuya Crossing",
        distance: 6000,
        image: "https://images.unsplash.com/photo-1540959733332-e94e270b4d82?auto=format&fit=crop&q=80&w=600&h=400",
        desc: "Neon lights and sushi.",
        price: 150,
        maxGroupSize: 6,
        featured: true
    },
    {
        title: "Dubai",
        location: "UAE",
        address: "Burj Khalifa",
        distance: 2000,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600&h=400",
        desc: "Luxury in the desert.",
        price: 200,
        maxGroupSize: 5,
        featured: true
    },
    {
        title: "Sydney",
        location: "Australia",
        address: "Opera House",
        distance: 8000,
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=600&h=400",
        desc: "Beautiful harbor city.",
        price: 110,
        maxGroupSize: 12,
        featured: true
    }
];

const importData = async () => {
    try {
        await Tour.deleteMany();
        await Tour.insertMany(tours);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
