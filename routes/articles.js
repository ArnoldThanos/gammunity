const express = require('express');

const router = express.Router();
const Articles = require('../models/Article.js');

router.get('/', (req, res, next) => {
  Articles.find()
    .then((result) => {
      console.log(result);
      res.render('articles', { articles: result });
    });
});

router.get('/new', (req, res, next) => {
  res.render('createNew');
});

router.get('/:id', (req, res, next) => {
  Articles.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render('article', { article: result });
    });
});

module.exports = router;
