const { Booking } = require('../models'); // <- now Booking is defined
class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      console.log('Error creating booking:', error);
      throw error;
    }
  }

  async getAll() {
    try {
      return await Booking.findAll();
    } catch (error) {
      console.log('Error fetching bookings:', error);
      throw error;
    }
  }

  async getById(id) {
    try {
      return await Booking.findByPk(id);
    } catch (error) {
      console.log('Error fetching booking by id:', error);
      throw error;
    }
  }
}

module.exports = { BookingRepository };
