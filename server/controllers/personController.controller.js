const person = require('../models/person');
const personController = {};

personController.getPeople = async (req, res)=>{
    const people = await person.find();
    res.json(people);
}

personController.createPerson = async (req, res)=>{
    
}

personController.getPerson = function(){
    
}

personController.updatePerson = function(){
    
}

personController.deletePerson = function(){

}

module.exports = personController;
