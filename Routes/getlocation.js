const express = require('express');
const router = express.Router();

router.post('/getlocation', (req, res) => {
  const { latlong } = req.body;

  if (!latlong || ! Array.isArray(latlong) || latlong.length !== 2) {
    return res.status(400).json({ error: 'Invalid latitude and longitude' });
  }

  const [latitude, longitude] = latlong;

  // Perform any necessary logic to fetch the location based on latitude and longitude
  // Replace the following code with your actual implementation

  const location = `Sample Location: Lat ${latitude}, Long ${longitude}`;

  // Send the location data in the response
  return res.status(200).json({ location });
});

module.exports = router;
