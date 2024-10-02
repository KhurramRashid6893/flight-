const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.json({ message: 'Message received, we will get back to you soon!' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
