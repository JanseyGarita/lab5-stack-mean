const express = require('express');
const router = express.Router();

const personController = require('../controllers/personController.controller');

/*

Ruta por defecto para el api:
http://localhost:3000/api/people/

*/

router.get('/', personController.getPeople);
router.post('/', personController.createPerson);
router.get('/:id',personController.getPerson);
router.put('/:id',personController.updatePerson);
router.delete('/:id', personController.deletePerson)


module.exports = router;