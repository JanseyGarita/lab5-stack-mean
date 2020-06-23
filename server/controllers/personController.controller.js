const person = require("../models/person");
const personController = {};

personController.getPeople = async (req, res) => {
  const people = await person.find();
  res.json(people);
};

personController.createPerson = async (req, res) => {
  const buddy = new person({
    name: req.body.name,
    province: req.body.province,
    dateOfBirth : req.body.dateOfBirth,
    genre : req.body.genre
  });
  await buddy.save();
  res.json(buddy.name + " has been added.");
};

personController.getPerson = async (req, res) => {
  const buddy = await person.findById(req.params.id);
  //console.log(req.params.id);
  res.json(buddy);
};

personController.updatePerson = async (req, res) => {
  const id = req.params.id;

  const newperson = {
    name: req.body.name,
    province: req.body.province,
    dateOfBirth: req.body.dateOfBirth,
    genre: req.body.genre,
  };
  person.update({ _id: id }, { $set: newperson }, { new: true },function(){});
  //console.log(req.body);
  res.json({ status: "updated" });
};

personController.deletePerson = async (req, res) => {
    await person.findByIdAndRemove(req.params.id);
    res.json({ status: "person deleted" });
};

module.exports = personController;
