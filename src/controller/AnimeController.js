const Anime = require('../models/anime');
const { request, response } = require('express');

const obtenerAnime = async (req = request, res = response) => {
    try {
        const { Estado } = req.query;
        const anime = await Anime.find({ Estado });
        return res.json(anime);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearAnime = async (req = request, res = response) => {
    try {
        const body = req.body;
        const anime = new Anime(body);
        await anime.save();
        return res.status(201).json(anime);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarAnime = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const anime = await Anime.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(anime);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarAnime = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Anime.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerAnime,
    crearAnime,
    actualizarAnime,
    eliminarAnime
})