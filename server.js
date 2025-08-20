const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/preorder', (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    timestamp: new Date()
  };
  // Read existing data
  let waitlist = [];
  try {
    waitlist = JSON.parse(fs.readFileSync('waitlist.json'));
  } catch (e) {}
  // Append new entry
  waitlist.push(data);
  // Save to file
  fs.writeFileSync('waitlist.json', JSON.stringify(waitlist, null, 2));
  res.json({ message: 'Success' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
