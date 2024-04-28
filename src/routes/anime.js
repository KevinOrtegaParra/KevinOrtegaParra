const express = require('express');
const  {obtenerAnime, crearAnime, actualizarAnime, eliminarAnime} = require('../controller/AnimeController');

const router = express.Router();

router.get('/anime', obtenerAnime);
router.post('/anime', crearAnime);
router.put('/anime/:id', actualizarAnime);
router.delete('/anime/:id', eliminarAnime);

module.exports = router;
