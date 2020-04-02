var express = require('express');
var router = express.Router();
const models = require('../models');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var validator = require('validator');

const Sequelize = require('sequelize');

router.get('/', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.location.findAll({
          attributes: ['id', 'latitude', 'longitude'],
          raw: true
    }).then(function(result){
        res.json({ result })
    });
  });
});

router.get('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.location.findOne({
          attributes: ['id', 'latitude', 'longitude'],
          where:{
            id: req.params.id
          },
          raw: true
    }).then(function(result){
        res.json({ result })
    });
  });
});

router.post('/', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var validationLocation = new Promise((success, error) => {
        if (validator.isEmpty(latitude) || validator.isEmpty(longitude)) {
            error('Empty field !');
        } else if (validator.isNumeric(latitude) == false) {
            error('Wrong latitude');
        } else if (validator.isNumeric(longitude) == false) {
            error('Wrong longitude');
        } else if (validator.isEmpty(longitude) == false && validator.isEmpty(latitude) == false) {
            models
                .location
                .findOne({
                    where: {
                        latitude: latitude,
                        longitude: longitude
                    }
                }).then(
                    location => {
                        if (location) {
                            error('This location already exist');
                        } else {
                            success('Location saved');
                        }
                    }
                );
        }
    })

    validationLocation
    .then(function(success) {
      console.log('test');
        models
        .location
        .create({
            latitude: latitude,
            longitude: longitude
        }).then(function(result){
            res.json({ result })
        })
    })
    .catch(function(error) {
      console.log(error);
        res.json({ error })
    });
  });
});

router.delete('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.location.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(location){
      if (location[0] == 1) {
        res.json({ success: 'Location update' })
      } else {
        res.json({ error: 'Error query' })
      }
    });
  });
});

router.put('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.location.update({ latitude: req.body.latitude, longitude: req.body.longitude }, {
      where: {
        id: req.params.id
      }
    }).then(function(location){
      if (location[0] == 1) {
        res.json({ success: 'Location update' })
      } else {
        res.json({ error: 'Error query' })
      }
    });
  });
});


module.exports = router;
