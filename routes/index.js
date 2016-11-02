var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    models.FederativeUnity.findAll({include: [models.City]})
    .then(function(fus){
        res.json(fus);
    });

});

module.exports = router;
