const express = require('express');
const router = express.Router();
const Farm = require('../../models/Farms.js');

router.get('/', async (req, res) => {
  const farms = await Farm.query().withGraphFetched('owner');
  res.json(farms);

});

// Export to app.js
module.exports = router;
