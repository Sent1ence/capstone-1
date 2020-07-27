const express = require('express');
const router = express.Router();
const Farm = require('../../models/Farms.js');

router.get('/', async (req, res) => {
  const farms = await Farm.query().withGraphFetched('owner');
  res.json(farms);

  /* res.json([
    {
      id: 1,
      farmer_id: 1,
      address: 'Dologon',
    },
    {
      id: 2,
      farmer_id: 2,
      address: 'Musuan',
    },
    {
      id: 3,
      farmer_id: 3,
      address: 'Dologon',
    },
  ]); */
});

// Export to app.js
module.exports = router;
