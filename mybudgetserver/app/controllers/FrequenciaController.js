const security = require('../helpers/security');
const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', security.verifyJWT, function (req, res) {
  models.Frequencia.create(req.body)
    .then(frequencia => res.status(200).send(frequencia))
    .catch(err => res.status(500).send({
      error: err
    }));
});

router.put('/:id', security.verifyJWT, function (req, res) {
  models.Frequencia.findById(req.params.id)
    .then(frequencia => {
      if (!frequencia) {
        res.status(404).send("Not Found");
      }

      frequencia.updateAttributes(req.body);
      res.status(200).send(frequencia);
    })
    .catch(err => {
      res.status(500).send({
        error: err
      });
    });
});

module.exports = router;