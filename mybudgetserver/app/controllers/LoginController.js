const express = require('express');
const router = express.Router();
const models = require('../models');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/', function (req, resp) {
  models.Usuario.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(usuario => {
      if (!usuario || !bcrypt.compareSync(req.body.token, usuario.token)) {
        resp.status(403).send({
          error: "Login inválido!"
        });
      }

      const id = usuario.id;
      var token = jwt.sign({
        id
      }, process.env.SECRET, {
        expiresIn: 864000
      });

      resp.status(200).send({
        auth: true,
        token: token
      });
    })
    .catch(err => {
      resp.status(500).send({
        error: err
      });
    });
});

router.post('/unochapeco', function (req, resp) {
  models.Usuario.findOne({
      where: {
        token: bcrypt.hashSync(req.body.token, 10)
      }
    })
    .then(usuario => {
      if (!usuario || !bcrypt.compareSync(req.body.token, usuario.token)) {
        resp.status(403).send({
          error: "Login inválido!"
        });
      }

      const id = usuario.id;
      var token = jwt.sign({
        id
      }, process.env.SECRET, {
        expiresIn: 864000
      });

      resp.status(200).send({
        auth: true,
        token: token
      });
    })
    .catch(err => {
      resp.status(500).send({
        error: err
      });
    });
});

module.exports = router;