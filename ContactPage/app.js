const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const messagesRouter = require('./routes/messages');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the messages router
app.use('/messages', messagesRouter);

// Define the main route
app.get('/', (req, res) => {
  res.render('index', { title: 'Message Board' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
