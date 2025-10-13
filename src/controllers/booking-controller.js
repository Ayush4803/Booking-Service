const { BookingService } = require('../services/booking-service');
const bookingService = new BookingService();

const createBooking = async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body); // ✅ matches service method
    return res.status(201).json({
      data: booking,
      success: true,
      err: {},
      message: 'Successfully created a booking',
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Failed to create booking',
      err: error.message || error,
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    return res.status(200).json({
      data: bookings,
      success: true,
      message: 'Bookings fetched successfully',
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Failed to fetch bookings',
      err: error.message || error,
    });
  }
};

module.exports = { createBooking, getAllBookings };
