var express = require('express');
var router = express.Router();
const models = require('../models');

var jwt = require('jsonwebtoken');
var validator = require('validator');

const Sequelize = require('sequelize');

/**
 * @api {get} /year 1. Request all Year information
 * @apiName GetYear
 * @apiGroup Year
 *
 * @apiSuccess {Integer} id Year Id.
 * @apiSuccess {Integer} year Year description.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "year": 2015
 *     }
 *
 * @apiError 404 YearNotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "YearNotFound"
 *     }
 */
router.get('/', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.year.findAll({
          attributes: ['id', 'year'],
          raw: true
    }).then(function(result){
        res.json({ result })
    });
  });
});

/**
 * @api {get} /year/:id 2. Request Year information by id
 * @apiName GetYearById
 * @apiGroup Year
 *
 * @apiParam {Integer} id Year unique ID.
 *
 * @apiSuccess {Integer} id Year Id.
 * @apiSuccess {Integer} year Year description.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "year": -12.05
 *     }
 *
 * @apiError error The id of the Year was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "YearNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter
 */
router.get('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.year.findOne({
          attributes: ['id', 'year'],
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
 * @api {post} /year 3. Post Year information
 * @apiName PostYear
 * @apiGroup Year
 *
 * @apiParam {Integer} year Year description
 *
 * @apiSuccess success Year saved
 *
 * @apiError error Error description
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "This year already exist"
 *     }
 *
 * @apiDescription
 * Parameters in an encoded form.
 */
router.post('/', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    var year = req.body.year;
    var validationYear = new Promise((success, error) => {
        if (validator.isEmpty(year)) {
            error('Empty field !');
        } else if (validator.isInt(year) == false) {
            error('Wrong year');
        } else if (validator.isEmpty(year) == false) {
            models
                .year
                .findOne({
                    where: {
                        year: year
                    }
                }).then(
                    year => {
                        if (year) {
                            error('This year already exist');
                        } else {
                            success('Year saved');
                        }
                    }
                );
        }
    })

    validationYear
    .then(function(success) {
        models
        .year
        .create({
            year: year
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
 * @api {delete} /year/:id 4. Delete Year information by id
 * @apiName DeleteYearById
 * @apiGroup Year
 *
 * @apiParam {Integer} id Year unique ID.
 *
 * @apiSuccess success Year delete
 *
 * @apiError error Year not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "YearNotFound"
 *     }
 *
 * @apiDescription
 * Url parameter.
 */
router.delete('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.year.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(year){
      if (year == 1) {
        res.json({ success: 'Year delete' })
      } else {
        res.json({ error: 'Error query' })
      }
    });
  });
});

/**
 * @api {put} /year/:id 5. Update Year information by id
 * @apiName UpdateYearById
 * @apiGroup Year
 *
 * @apiParam {Integer} id Year unique ID in Url.
 * @apiParam {Integer} year Year description.
 *
 * @apiSuccess success Year update
 *
 * @apiError error Year not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "YearNotFound"
 *     }
 *
 * @apiDescription
 * Parameters in an encode form
 */
router.put('/:id', function(req, res, next) {
  var token = req.headers['x-access-token'];
  jwt.verify(token, '8KBBxkxH4hx5zRyVzH', function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    models.year.update({ year: req.body.year }, {
      where: {
        id: req.params.id
      }
    }).then(function(year){
      if (year == 1) {
        res.json({ success: 'Year update' })
      } else {
        res.json({ error: 'Error query' })
      }
    });
  });
});


module.exports = router;
