const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    console.log("DB_URL used by mongoose:", process.env.DB_URL); // debug
    const con = await mongoose.connect(process.env.DB_URL);
    console.log(`mongoDB connected to host: ${con.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
