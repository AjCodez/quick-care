const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ajit:ajit@ajit.vugjw.mongodb.net/test"

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo");
    })
}

module.exports = connectToMongo