const security = require('../helpers/security')
const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', security.verifyJWT, function (req, res) {
  res.status(200).send({
    descricao: 'Use a mente!'
  });
});

module.exports = router;