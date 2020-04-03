var express = require('express');
var router = express.Router();

/**
 * @api {get} / Get an Api Key
 * @apiName ApiKey
 * @apiGroup Api Key
 *
 * @apiParam x-access-token Your Api Key
 *
 * @apiDescription
 * You have to create an account at this adress to get an Api Key : http://localhost:3000
 *
 * Use it in your request header as below.
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Api Utopia Terrae' });
});

module.exports = router;
