const mongoose = require('mongoose');

const uri1 = "mongodb+srv://sdevraj2122_db_user:Travel%402122@cluster0.kuc2efa.mongodb.net/?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://sdevraj2122_db_user:Travel@2122@cluster0.kuc2efa.mongodb.net/?retryWrites=true&w=majority";

async function test() {
    console.log("Testing with encoded password...");
    try {
        await mongoose.connect(uri1);
        console.log("Success with uri1");
        process.exit(0);
    } catch (e) {
        console.error("Failed uri1:", e.message);
    }

    console.log("Testing with plain password...");
    try {
        await mongoose.connect(uri2);
        console.log("Success with uri2");
        process.exit(0);
    } catch (e) {
        console.error("Failed uri2:", e.message);
    }
    process.exit(1);
}

test();
