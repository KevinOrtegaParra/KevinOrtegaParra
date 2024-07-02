const mongoose = require('mongoose');

const animeSchema = mongoose.Schema({

    Nombre: {
        type: String,
        require: true,
        unique:true
    },
    Estado: {
        type: Boolean,
        default: false,
        require: true
    },
    Color: {
        type: String,
        default: "#ff0000",
        require: true
    },
    Description: {
        type: String,
        default: "?",
        require: true
    },
    UrlFoto: {
        type: String,
        unique: true,
        default: "https://i.pinimg.com/736x/61/15/dc/6115dc1ecc7d78d9ff510b354c2c51e2.jpg",
        require: true
    },
    FechaCreación: {
        type: Date,
        default: new Date()
    },
    FechaActualización: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Anime', animeSchema);