const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "Cloud-Native CI/CD Pipeline Running Successfully!", version: "2.0.0" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});