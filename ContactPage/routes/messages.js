const express = require('express');
const fs = require('fs');
const router = express.Router();
const messagesFile = './data/messages.json';

// Helper function to read messages from file
const readMessages = () => {
  const data = fs.readFileSync(messagesFile);
  return JSON.parse(data);
};

// Helper function to write messages to file
const writeMessages = (messages) => {
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
};

// Route to display messages as JSON
router.get('/json', (req, res) => {
  const messages = readMessages();
  res.json(messages);
});

// Route to render messages with EJS
router.get('/', (req, res) => {
  const messages = readMessages();
  res.render('messages', { title: 'Message Board', messages });
});

// Route to post new messages
router.post('/new', (req, res) => {
  const { text } = req.body;
  const messages = readMessages();
  messages.push({ text });
  writeMessages(messages);
  res.redirect('/messages');
});

module.exports = router;
