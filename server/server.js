const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/quote', (req, res) => {
  res.json({ estimate: 199 });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});