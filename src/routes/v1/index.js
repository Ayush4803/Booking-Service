const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings } = require('../../controllers/booking-controller');

router.post('/bookings', createBooking);
router.get('/bookings', getAllBookings);

module.exports = router;
