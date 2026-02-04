const express = require('express');
const router = express.Router();
require('dotenv').config(); 

let apiController = require('../controllers/apiController');

router.post('/registerArticle', apiController.registerArticle);
router.get('/getAllArticles', apiController.getAllArticles);
router.get('/getArticle/:id', apiController.getArticle);
router.delete('/deleteArticle/:id', apiController.deleteArticle);
router.get('/pokemon/:name', apiController.getPokemon);
module.exports = router;