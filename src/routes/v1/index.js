const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, getBookingById } = require('../../controllers/booking-controller');

// Create a booking
router.post('/bookings', createBooking);

// Get all bookings
router.get('/bookings', getAllBookings);

// Get a single booking by ID
router.get('/bookings/:id', getBookingById);

module.exports = router;
