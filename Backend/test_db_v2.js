const mongoose = require('mongoose');

const passwords = [
    "Travel%402122",
    "Travel2122",
    "travel%402122",
    "travel2122",
    "Travel%402022",
    "Travel2022"
];

const username = "sdevraj2122_db_user";
const host = "cluster0.kuc2efa.mongodb.net";

async function test() {
    for (const pw of passwords) {
        const uri = `mongodb+srv://${username}:${pw}@${host}/?retryWrites=true&w=majority`;
        console.log(`Testing with password: ${pw}`);
        try {
            await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
            console.log("SUCCESS! Password is:", pw);
            process.exit(0);
        } catch (e) {
            console.error(`Failed: ${e.message}`);
        }
    }
    console.log("All attempts failed.");
    process.exit(1);
}

test();
