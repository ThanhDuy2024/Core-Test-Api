const mongoose = require('mongoose');
module.exports.connect = async (req, res) => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database has connected !");
    } catch (error) {   
        console.log(error);
    }
}