var express = require('express');
var router = express.Router();
const models = require('../models');

var jwt = require('jsonwebtoken');
var validator = require('validator');

const Sequelize = require('sequelize');

models.climate.hasMany(models.location, {foreignKey: 'id' });
models.location.belongsTo(models.climate, {foreignKey: 'id' });
models.location.hasMany(models.climate, {foreignKey: 'location_id' });
models.climate.belongsTo(models.location, {foreignKey: 'location_id' });
models.climate.hasMany(models.year, {foreignKey: 'id' });
models.year.belongsTo(models.climate, {foreignKey: 'id' });
models.year.hasMany(models.climate, {foreignKey: 'year_id' });
models.climate.belongsTo(models.year, {foreignKey: 'year_id' });

/**
 * @api {get} /climate 1. Request all Climate information
 * @apiName GetClimate
 * @apiGroup Climate
 *
 * @apiSuccess {Integer} id Climate Id.
 * @apiSuccess {Integer} location_id Location Id.
 * @apiSuccess {Integer} latitude Location latitude.
 * @apiSuccess {Integer} longitude Location longitude.
 * @apiSuccess {Integer} year_id Year Id.
 * @apiSuccess {Integer} year Year.
 * @apiSuccess {Float} sea_level Sea level.
 * @apiSuccess {Float} pollution_level Pollution Level.
 * @apiSuccess {Float} temperature Temperature.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "location_id": 1,
         "latitude": 40.25,
         "longitude": 20.86,
         "year_id": 1,
         "year": 2019
         "sea_level": 10.05,
         "pollution_level": 11.05,
         "temperature": 25.20
 *     }
 *
 * @apiError 404 ClimateNotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimateNotFound"
 *     }
 */
router.get('/', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.climate.findAll({
          attributes: ['id', 'location_id', 'location.latitude', 'location.longitude', 'year_id', 'year.year', 'sea_level', 'pollution_level', 'temperature'],
          raw: true,
          include: [{
              model: models.location,
              as: 'location',
              attributes: []
            },{
              model: models.year,
              as: 'year',
              attributes: []
            }
          ]
    }).then(function(result){
        res.json({ result })
    });
  });
});

/**
 * @api {get} /climate/:id 2. Request Climate information by id
 * @apiName GetClimateById
 * @apiGroup Climate
 *
 * @apiParam {Integer} id Climate unique ID.
 *
 * @apiSuccess {Integer} id Climate Id.
 * @apiSuccess {Integer} location_id Location Id.
 * @apiSuccess {Integer} latitude Location latitude.
 * @apiSuccess {Integer} longitude Location longitude.
 * @apiSuccess {Integer} year_id Year Id.
 * @apiSuccess {Integer} year Year.
 * @apiSuccess {Float} sea_level Sea level.
 * @apiSuccess {Float} pollution_level Pollution Level.
 * @apiSuccess {Float} temperature Temperature.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "location_id": 1,
         "latitude": 40.25,
         "longitude": 20.86,
         "year_id": 1,
         "year": 2019
         "sea_level": 10.05,
         "pollution_level": 11.05,
         "temperature": 25.20
 *     }
 *
 * @apiError error The id of the Climate was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimateNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter
 */
router.get('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.climate.findOne({
          attributes: ['id', 'location_id', 'location.latitude', 'location.longitude', 'year_id', 'year.year', 'sea_level', 'pollution_level', 'temperature'],
          where:{
            id: req.params.id
          },
          raw: true,
          include: [{
              model: models.location,
              as: 'location',
              attributes: []
            },{
              model: models.year,
              as: 'year',
              attributes: []
            }
          ]
    }).then(function(result){
        res.json({ result })
    });
  });
});

/**
 * @api {get} /climate/location/:id 3. Request Climate information by location
 * @apiName GetClimateByLocation
 * @apiGroup Climate
 *
 * @apiParam {Integer} id Location unique ID.
 *
 * @apiSuccess {Integer} id Climate Id.
 * @apiSuccess {Integer} location_id Location Id.
 * @apiSuccess {Integer} latitude Location latitude.
 * @apiSuccess {Integer} longitude Location longitude.
 * @apiSuccess {Integer} year_id Year Id.
 * @apiSuccess {Integer} year Year.
 * @apiSuccess {Float} sea_level Sea level.
 * @apiSuccess {Float} pollution_level Pollution Level.
 * @apiSuccess {Float} temperature Temperature.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "location_id": 1,
         "latitude": 40.25,
         "longitude": 20.86,
         "year_id": 1,
         "year": 2019
         "sea_level": 10.05,
         "pollution_level": 11.05,
         "temperature": 25.20
 *     }
 *
 * @apiError error The id of the Climate was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimateNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter
 */
router.get('/location/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.climate.findOne({
          attributes: ['id', 'location_id', 'location.latitude', 'location.longitude', 'year_id', 'year.year', 'sea_level', 'pollution_level', 'temperature'],
          where:{
            location_id: req.params.id
          },
          raw: true,
          include: [{
              model: models.location,
              as: 'location',
              attributes: []
            },{
              model: models.year,
              as: 'year',
              attributes: []
            }
          ]
    }).then(function(result){
        res.json({ result })
    });
  });
});

/**
 * @api {get} /climate/year/:id 4. Request Climate information by year
 * @apiName GetClimateByYear
 * @apiGroup Climate
 *
 * @apiParam {Integer} id Year unique ID.
 *
 * @apiSuccess {Integer} id Climate Id.
 * @apiSuccess {Integer} location_id Location Id.
 * @apiSuccess {Integer} latitude Location latitude.
 * @apiSuccess {Integer} longitude Location longitude.
 * @apiSuccess {Integer} year_id Year Id.
 * @apiSuccess {Integer} year Year.
 * @apiSuccess {Float} sea_level Sea level.
 * @apiSuccess {Float} pollution_level Pollution Level.
 * @apiSuccess {Float} temperature Temperature.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "location_id": 1,
         "latitude": 40.25,
         "longitude": 20.86,
         "year_id": 1,
         "year": 2019
         "sea_level": 10.05,
         "pollution_level": 11.05,
         "temperature": 25.20
 *     }
 *
 * @apiError error The id of the Climate was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimateNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter
 */
router.get('/year/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.climate.findOne({
          attributes: ['id', 'location_id', 'location.latitude', 'location.longitude', 'year_id', 'year.year', 'sea_level', 'pollution_level', 'temperature'],
          where:{
            year_id: req.params.id
          },
          raw: true,
          include: [{
              model: models.location,
              as: 'location',
              attributes: []
            },{
              model: models.year,
              as: 'year',
              attributes: []
            }
          ]
    }).then(function(result){
        res.json({ result })
    });
  });
});

/**
 * @api {get} /climate/location/:locationId/year/:yearId 5. Request Climate information by location and year
 * @apiName GetClimateByLocationAndYear
 * @apiGroup Climate
 *
 * @apiParam {Integer} id Year unique ID.
 *
 * @apiSuccess {Integer} id Climate Id.
 * @apiSuccess {Integer} location_id Location Id.
 * @apiSuccess {Integer} latitude Location latitude.
 * @apiSuccess {Integer} longitude Location longitude.
 * @apiSuccess {Integer} year_id Year Id.
 * @apiSuccess {Integer} year Year.
 * @apiSuccess {Float} sea_level Sea level.
 * @apiSuccess {Float} pollution_level Pollution Level.
 * @apiSuccess {Float} temperature Temperature.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "location_id": 1,
         "latitude": 40.25,
         "longitude": 20.86,
         "year_id": 1,
         "year": 2019
         "sea_level": 10.05,
         "pollution_level": 11.05,
         "temperature": 25.20
 *     }
 *
 * @apiError error The id of the Climate was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimateNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter
 */
router.get('/location/:location/year/:year', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.climate.findOne({
          attributes: ['id', 'location_id', 'location.latitude', 'location.longitude', 'year_id', 'year.year', 'sea_level', 'pollution_level', 'temperature'],
          where:{
            location_id: req.params.location,
            year_id: req.params.year
          },
          raw: true,
          include: [{
              model: models.location,
              as: 'location',
              attributes: []
            },{
              model: models.year,
              as: 'year',
              attributes: []
            }
          ]
    }).then(function(result){
        res.json({ result })
    });
  });
});

/**
 * @api {post} /climate 6. Post Climate information
 * @apiName PostClimate
 * @apiGroup Climate
 *
 * @apiParam {Integer} locationId Location Id
 * @apiParam {Integer} yearId Year Id
 * @apiParam {Float} seaLevel Sea level
 * @apiParam {Float} pollutionLevel Pollution level
 * @apiParam {Float} temperature Temperature
 *
 * @apiSuccess success Climate saved
 *
 * @apiError error Error description
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "This climate already exist"
 *     }
 *
 * @apiDescription
 * Parameters in an encoded form.
 */
router.post('/', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var locationId = req.body.locationId;
    var yearId = req.body.yearId;
    var seaLevel = req.body.seaLevel;
    var pollutionLevel = req.body.pollutionLevel;
    var temperature = req.body.temperature;
    var validationClimate = new Promise((success, error) => {
        if (validator.isEmpty(locationId) || validator.isEmpty(yearId)) {
            error('Empty field !');
        } else if (validator.isInt(locationId) == false) {
            error('Wrong location');
        } else if (validator.isInt(yearId) == false) {
            error('Wrong year');
        } else if ((validator.isEmpty(seaLevel) == false && validator.isFloat(seaLevel) == false) || (validator.isEmpty(pollutionLevel) == false && validator.isFloat(pollutionLevel) == false) || (validator.isEmpty(temperature) == false && validator.isFloat(temperature) == false)) {
            error('Wrong value');
        } else {
            models
                .climate
                .findOne({
                    where: {
                        location_id: locationId,
                        year_id: yearId
                    }
                }).then(
                    climate => {
                        if (climate) {
                            error('This climate already exist');
                        } else {
                            success('Climate saved');
                        }
                    }
                );
        }
    })

    validationClimate
    .then(function(success) {
        models
        .climate
        .create({
            location_id: locationId,
            year_id: yearId,
            sea_level: seaLevel,
            pollution_level: pollutionLevel,
            temperature: temperature
        }).then(function(result){
            res.json({ result })
        })
    })
    .catch(function(error) {
        res.json({ error })
    });
  });
});

/**
 * @api {delete} /climate/:id 7. Delete Climate information by id
 * @apiName DeleteClimateById
 * @apiGroup Climate
 *
 * @apiParam {Integer} id Climate unique ID.
 *
 * @apiSuccess success Climate delete
 *
 * @apiError error Climate not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimateNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter.
 */
router.delete('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.climate.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(climate){
      if (climate == 1) {
        res.json({ success: 'Climate delete' })
      } else {
        res.json({ error: 'Error query' })
      }
    });
  });
});

/**
 * @api {put} /climate/:id 8. Update Climate information by id
 * @apiName UpdateClimateById
 * @apiGroup Climate
 *
 * @apiParam {Integer} id Climate unique ID in Url.
 * @apiParam {Float} sea_level Sea level.
 * @apiParam {Float} pollution_level Pollution level.
 * @apiParam {Float} temperature Temperature.
 *
 * @apiSuccess success Climate update
 *
 * @apiError error Climate not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimateNotFound"
 *     }
 *
 * @apiDescription
 * Parameters in an encoded form.
 */
router.put('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var seaLevel = req.body.seaLevel;
    var pollutionLevel = req.body.pollutionLevel;
    var temperature = req.body.temperature;
    models.climate.update({ sea_level: seaLevel, pollution_level: pollutionLevel, temperature: temperature }, {
      where: {
          id: req.params.id
      }
    }).then(function(climate){
      if (climate == 1) {
        res.json({ success: 'Climate update' })
      } else {
        res.json({ error: 'Error query' })
      }
    });
  });
});


module.exports = router;
