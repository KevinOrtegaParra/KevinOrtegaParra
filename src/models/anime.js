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