const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const dbUrl = process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: "672597d392fa7c1388d365ee",
        geometry: {
            type: "Point",
            coordinates: [77.209, 28.6139],
        },
        category: "Trending",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
  
initDB();