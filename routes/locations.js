var express = require('express');
var router = express.Router();
const models = require('../models');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var validator = require('validator');

const Sequelize = require('sequelize');

/**
 * @api {get} /location 1. Request Location information
 * @apiName GetLocation
 * @apiGroup Location
 *
 * @apiSuccess {Integer} id Id of the Location.
 * @apiSuccess {Varchar} latitude Latitude of the Location.
 * @apiSuccess {Varchar} longitude  Longitude of the Location.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "latitude": -12.05,
 *       "longitude": 28.632
 *     }
 *
 * @apiError 404 LocationNotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "LocationNotFound"
 *     }
 */
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

/**
 * @api {get} /location/:id 2. Request Location information by id
 * @apiName GetLocationById
 * @apiGroup Location
 *
 * @apiParam {Number} id Location unique ID.
 *
 * @apiSuccess {Integer} id Id of the Location.
 * @apiSuccess {Varchar} latitude Latitude of the Location.
 * @apiSuccess {Varchar} longitude  Longitude of the Location.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "latitude": -12.05,
 *       "longitude": 28.632
 *     }
 *
 * @apiError error The id of the Location was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "LocationNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter
 */
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

/**
 * @api {post} /location 3. Post Location information
 * @apiName PostLocation
 * @apiGroup Location
 *
 * @apiParam {Varchar} latitude Latitude value
 * @apiParam {Varchar} longitude Longitude value
 *
 * @apiSuccess success Location saved
 *
 * @apiError error Error description
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "This location already exist"
 *     }
 *
 * @apiDescription
 * Parameters in an encoded form.
 */
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

/**
 * @api {delete} /location/:id 4. Delete Location information by id
 * @apiName DeleteLocationById
 * @apiGroup Location
 *
 * @apiParam {Number} id Location unique ID.
 *
 * @apiSuccess success Location delete
 *
 * @apiError error Location not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "LocationNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter.
 */
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
        res.json({ success: 'Location delete' })
      } else {
        res.json({ error: 'Error query' })
      }
    });
  });
});

/**
 * @api {put} /location/:id 5. Update Location information by id
 * @apiName UpdateLocationById
 * @apiGroup Location
 *
 * @apiParam {Number} id Location unique ID.
 *
 * @apiSuccess success Location update
 *
 * @apiError error Location not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "LocationNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter.
 */
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
