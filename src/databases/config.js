const mongoose = require('mongoose');

//mongodb connection
const mongoConnet = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.error(error));

    }catch(e){
        console.log("Connection Error",e);
        throw new Error("Connection Error")

    }
    
}

module.exports = {mongoConnet}; 