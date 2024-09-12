const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// POST endpoint
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
