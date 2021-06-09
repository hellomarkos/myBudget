const security = require('../helpers/security')
const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', security.verifyJWT, function (req, res) {
  models.Categoria.create(req.body)
    .then(categoria => res.status(200).send(categoria))
    .catch(err => res.status(500).send({
      error: err
    }));
});

router.post('/', security.verifyJWT, function (req, res) {
  models.Categoria.findById(req.params.id)
    .then(categoria => {
      if (!categoria) {
        res.status(404).send("Not Found");
      }

      categoria.updateAttributes(req.body);
      res.status(200).send(categoria);
    })
    .catch(err => {
      res.status(500).send({
        error: err
      });
    });
});

module.exports = router;