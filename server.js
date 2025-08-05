const express = require('express');
const path = require('path');
const app = express();

// Directly serve the HTML inside node_modules
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'index.html'));
});

// Optionally serve static files too
app.use('/assets', express.static(path.join(__dirname, 'node_modules')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
