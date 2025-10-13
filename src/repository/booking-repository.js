const { Booking } = require('../models');

class BookingRepository {
  async createBooking(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      console.log('Error creating booking:', error);
      throw error;
    }
  }

  async getAllBookings() {
    try {
      return await Booking.findAll();
    } catch (error) {
      console.log('Error fetching bookings:', error);
      throw error;
    }
  }

  async getBookingById(id) {
    try {
      return await Booking.findByPk(id);
    } catch (error) {
      console.log('Error fetching booking by id:', error);
      throw error;
    }
  }
}

module.exports = { BookingRepository };
