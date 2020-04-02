var express = require('express');
var router = express.Router();
const models = require('../models');

var validator = require('validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const Sequelize = require('sequelize');

const saltRounds = 10;

/* GET users listing. */
router.post('/signup', function(req, res, next) {

    signup_password = req.body.signup_password;
    signup_confpassword = req.body.signup_confpassword;
    signup_email = req.body.signup_email;

    var validationSignup = new Promise((success, error) => {
        if (validator.isEmpty(signup_password) || validator.isEmpty(signup_confpassword) || validator.isEmpty(signup_email)) {
            error('Tout les champs ne sont pas complets !');
        } else if (signup_password.length < 5) {
            error('Votre mot de passe doit contenir 5 caractères minimum !');
        } else if (signup_password != signup_confpassword) {
            error('Les mots de passe ne correspondent pas !');
        } else if (validator.isEmail(signup_email) == false) {
            error('Votre email est invalide !');
        } else if (validator.isEmpty(signup_email) == false) {
            models
                .User
                .findOne({
                    where: {
                        email: signup_email
                    }
                }).then(
                    user => {
                        if (user) {
                            error('Cet email est déjà utilisé !');
                        } else {
                            success('Tous les champs sont valides');
                        }
                    }
                );
        }
    })

    validationSignup
        .then(function(success) {
            var salt = bcrypt.genSaltSync(saltRounds);
            var hash = bcrypt.hashSync(signup_password, salt);

            models
            .User
            .create({
                email: signup_email,
                password: hash,
                salt: salt
            }).then(function(result){
              var token = jwt.sign({id: result['dataValues']['id']}, '8KBBxkxH4hx5zRyVzH');
              models.User.update(
                { token: token },
                { where: { id: result['dataValues']['id'] } }
              )
              .catch(err =>
                console.log('Error query !')
              )
            });

            signup_error = undefined;

            signup_password = undefined;
            signup_confpassword = undefined;
            signup_email = undefined;

            res.render('index', {
                signup_validate: 'User created !'
            });

        })
        .catch(function(error) {
            res.render('index', {
                signup_error: error,
                email: signup_email
            });
        });
});

router.post('/signin', function(req, res, next) {
    signin_email = req.body.signin_email;
    signin_password = req.body.signin_password;

    var validationSignin = new Promise((success, error) => {
        if (validator.isEmpty(signin_email) || validator.isEmpty(signin_password)) {
            error('Tout les champs ne sont pas complets !');
        } else if (validator.isEmail(signin_email)) {
            models
                .User
                .findOne({
                    where: {
                        email: signin_email
                    },
                    attributes: ['id', 'email', 'password', 'salt']
                }).then(
                    user => {
                        if (!user) {
                            error('Email doesn\'t exist !');
                        } else if (user.password == bcrypt.hashSync(signin_password, user.salt)) {
                          success('Connected');
                        } else {
                          error('Wrong password !');
                        }
                    }
                );
        }
    });

    validationSignin
        .then(function(success) {
            res.redirect('index');
        })
        .catch(function(error) {
            res.render('index', {
                signin_error: error
            });
        });
});

module.exports = router;
