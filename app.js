const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  // Fetch posts from MongoDB and render home page
  res.render('index');
});

app.get('/post/:id', (req, res) => {
  // Fetch a single post by ID from MongoDB and render the post page
  res.render('post');
});

app.post('/create', (req, res) => {
  // Create a new post in MongoDB based on the form data
  res.redirect('/');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});