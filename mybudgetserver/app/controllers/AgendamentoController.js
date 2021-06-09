const security = require('../helpers/security')
const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', security.verifyJWT, function (req, res) {
  models.Agendamento.create(req.body)
    .then(agendamento => res.status(200).send(agendamento))
    .catch(err => res.status(500).send({
      error: err
    }));
});

router.put('/:id', security.verifyJWT, function (req, res) {
  models.Agendamento.findById(req.params.id)
    .then(agendamento => {
      if (!agendamento) {
        res.status(404).send("Not Found");
      }

      agendamento.updateAttributes(req.body);
      res.status(200).send(agendamento);
    })
    .catch(err => {
      res.status(500).send({
        error: err
      });
    });
});

module.exports = router;