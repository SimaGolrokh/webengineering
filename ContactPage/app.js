const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const messagesRouter = require('./ContactPage/routes/messages');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

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
