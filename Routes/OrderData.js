const express = require('express');
const router = express.Router();

const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
  try {
    const { order_data, email, order_date } = req.body;

    const existingOrder = await Order.findOne({ email });

    if (existingOrder) {
      console.log("Another Order");
      await Order.findOneAndUpdate(
        { email },
        { $push: { order_data: { order_data, order_date } } }
      );
    } else {
      console.log("First Order");
      await Order.create({
        email,
        order_data: [{ order_data, order_date }]
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: 'An error occurred while processing the order.' });
  }
});

router.post('/myorderData', async (req, res) => {
  try {
    const myData = await Order.findOne({ email: req.body.email });
    console.log(myData);
    res.json({ orderData: myData });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: 'An error occurred while processing the order.' });
  }
});

module.exports = router;
