const express = require('express');

const contactsControl= require('../controllers/contacts');

const router = express.Router();

router.get('/', contactsControl.getData);

router.get('/:id', contactsControl.getDataById);

router.post('/', contactsControl.createContact);

router.put('/:id', contactsControl.updateContact);

router.delete('/:id', contactsControl.deleteContact);

module.exports = router;
