var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.FederativeUnity.findAll({include: [models.City]})
    .then(function(fus){
        res.json(fus);
    });

});

module.exports = router;
