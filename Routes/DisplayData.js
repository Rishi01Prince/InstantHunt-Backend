const express = require('express');
const router = express.Router();

router.post('/VechicleData', (req, res) => {
  try {
    res.send([global.VechicleData, global.VechicleCategory]);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
