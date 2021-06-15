const security = require('../helpers/security')
const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', security.verifyJWT, function (req, res) {
  models.Receita.create(req.body)
    .then(receita => res.status(200).send(receita))
    .catch(err => res.status(500).send({
      error: err
    }));
});

router.put('/:id', security.verifyJWT, function (req, res) {
  models.Receita.findById(req.params.id)
    .then(receita => {
      if (!receita) {
        res.status(404).send("Not Found");
      }

      receita.updateAttributes(req.body);
      res.status(200).send(receita);
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