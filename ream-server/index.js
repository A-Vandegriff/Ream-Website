const express = require('express');
const cors = require('cors');
const articleRouter = require('./routes/articles.js'); //importing the router articles.js

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());




app.use('/articles', articleRouter);

app.use('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//error handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});