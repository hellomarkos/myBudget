const security = require('../helpers/security')
const express = require('express');
const router = express.Router();
const models = require('../models');

/**
 * @swagger
 * /perfis:
 *    post:
 *      description: Insere um novo perfil
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: descricao
 *          description: Descrição do perfil
 *          in: formData
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Objeto JSON que representa o novo perfil
 *        500:
 *          description: Erro que não foi possível salvar os dados
 */
router.post('/', security.verifyJWT, function (req, res) {
    models.Perfil.create(req.body)
        .then(perfil => res.status(200).send(perfil))
        .catch(err => res.status(500).send({error: err}))
})

/**
 * @swagger
 * definitions:
 *   Perfis:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       descricao:
 *         type: string
 *       createdAt: 
 *         type: date
 *       updatedAt: 
 *         type: date
 * 
 * /perfis:
 *    get:
 *      description: Retorna todos os perfis cadastrados
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: Lista de perfis
 *          schema:
 *            $ref: '#/definitions/Perfil'
 *        500:
 *          description: Erro que não foi possível recuperar os perfis
 */
router.get('/', security.verifyJWT, function (req, res) {
    models.Perfil.findAll()
    .then(perfis => res.status(200).send(perfis))
    .catch(err => res.status(500).send({error: err}))
})

/**
 * @swagger
 * /perfis/:id:
 *    get:
 *      description: Retorna um perfil pelo id
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: Objeto JSON com o perfil
 *        404:
 *          description: Perfil não encontrado
 *        500:
 *          description: Erro que não foi possível buscar o perfil
 */
router.get('/:id', security.verifyJWT, function (req, res) {
    models.Perfil.findById(req.params.id)
    .then(perfil =>
      {
        if (!perfil) res.status(404).send("Not Found");
        res.status(200).send(perfil)
      }
    )
    .catch(err => res.status(500).send({error: err}))
});

/**
 * @swagger
 * /perfis/:id:
 *    delete:
 *      description: Excluí um perfil
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: Objeto JSON com mensagem de sucesso
 *        404:
 *          description: Perfil não encontrado
 *        500:
 *          description: Erro que não foi possível excluir o perfil
 */
router.delete('/:id', security.verifyJWT, function (req, res) {
    models.Perfil.findById(req.params.id)
    .then(perfil => {
      if (!perfil) res.status(404).send("Not Found")

      models.Perfil.destroy({
        where: { id: req.params.id }
      })
      .then(perfil => {
        res.status(200).send({success: true})
      })
      .catch(err => res.status(500).send({error: err}))
    })
    .catch(err => res.status(500).send({error: err}))
});

/**
 * @swagger
 * /perfil/:id:
 *    put:
 *      description: Atualiza um perfil
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: descricao
 *          description: Descrição do perfil
 *          in: formData
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Objeto JSON que representa a atualização do perfil
 *        404:
 *          description: Perfil não encontrado
 *        500:
 *          description: Erro que não foi possível salvar os dados
 */
router.put('/:id', security.verifyJWT,function (req, res) {
    models.Perfil.findById(req.params.id)
    .then(perfil => {
        if (!perfil) res.status(404).send("Not Found")

        perfil.updateAttributes(req.body)

        res.status(200).send(perfil)

    })
    .catch(err => {
      console.log(err)
      res.status(500).send({error: err})
    })
});

module.exports = router;
