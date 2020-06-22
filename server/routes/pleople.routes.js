const express = require('express');
const router = express.Router();

const personController = require('../controllers/personController.controller');

router.get('/', personController.getPeople);
router.post('/', personController.createPerson);
router.get('/:id',personController.getPerson);
router.put('/:id',personController.updatePerson);
router.delete('/:id', personController.deletePerson)


module.exports = router;