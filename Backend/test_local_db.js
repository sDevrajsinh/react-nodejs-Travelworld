const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/travel_world";

async function test() {
    console.log(`Testing Local URI: ${uri}`);
    try {
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
        console.log("SUCCESS!");
        process.exit(0);
    } catch (e) {
        console.error(`Failed: ${e.message}`);
        process.exit(1);
    }
}

test();
