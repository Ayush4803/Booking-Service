const { BookingService } = require('../services/booking-service');
const bookingService = new BookingService();

// Create booking
const createBooking = async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json({
      data: booking,
      success: true,
      err: {},
      message: 'Successfully created a booking'
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: 'Failed to create booking',
      err: error.message || error
    });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json({
      data: bookings,
      success: true,
      err: {},
      message: 'Bookings fetched successfully'
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: 'Failed to fetch bookings',
      err: error.message || error
    });
  }
};

// Get single booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await bookingService.getBookingById(req.params.id);
    res.status(200).json({
      data: booking,
      success: true,
      err: {},
      message: 'Booking fetched successfully'
    });
  } catch (error) {
    res.status(404).json({
      data: {},
      success: false,
      message: error.message || 'Booking not found',
      err: error.message || error
    });
  }
};

module.exports = { createBooking, getAllBookings, getBookingById };
