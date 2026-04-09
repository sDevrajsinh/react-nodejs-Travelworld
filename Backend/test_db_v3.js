const mongoose = require('mongoose');

const uris = [
    "mongodb+srv://sdevraj2122_db_user:Travel%402122@cluster0.kuc2efa.mongodb.net/?retryWrites=true&w=majority",
    "mongodb+srv://sdevraj2122:Travel%402122@cluster0.kuc2efa.mongodb.net/?retryWrites=true&w=majority",
    "mongodb+srv://sdevraj2122_db_user:Travel@2122@cluster0.kuc2efa.mongodb.net/?retryWrites=true&w=majority"
];

async function test() {
    for (const uri of uris) {
        console.log(`Testing URI: ${uri.replace(/:.+@/, ':****@')}`);
        try {
            await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
            console.log("SUCCESS!");
            process.exit(0);
        } catch (e) {
            console.error(`Failed: ${e.message}`);
        }
    }
    process.exit(1);
}

test();
