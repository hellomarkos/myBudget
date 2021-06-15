const security = require('../helpers/security')
const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', security.verifyJWT, function (req, res) {
  models.Despesa.create(req.body)
    .then(despesa => res.status(200).send(despesa))
    .catch(err => res.status(500).send({
      error: err
    }));
});

router.put('/:id', security.verifyJWT, function (req, res) {
  models.Despesa.findById(req.params.id)
    .then(despesa => {
      if (!despesa) {
        res.status(404).send("Not Found");
      }

      despesa.updateAttributes(req.body);
      res.status(200).send(despesa);
    })
    .catch(err => {
      res.status(500).send({
        error: err
      })
    });
});

router.get('/grafico', security.verifyJWT, function (req, res) {

});

module.exports = router;