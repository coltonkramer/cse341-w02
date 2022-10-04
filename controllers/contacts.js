const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getData = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getDataById = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db("contacts").collection("contacts").insertOne(newContact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'We got an error here');
  }
}

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  
  const contactToUpdate = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday
  };
  
  const response = await mongodb
  .getDb()
  .db('contacts')
  .collection('contacts')
  .replaceOne({ _id: userId }, contactToUpdate);
  
  console.log(response);
  
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'We got an error here');
  }
  
}


const deleteContact = async(req, res) => {
  const userId = new ObjectId(req.params.id);
  
  const response = await mongodb.getDb().db('contacts').collection('contacts').remove({ _id: userId }, true);
  
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'We got an error here');
  }
  
}

module.exports = { 
  getData, 
  getDataById, 
  createContact,
  updateContact,
  deleteContact 
};
