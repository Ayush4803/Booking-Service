const axios = require('axios');
const { BookingRepository } = require('../repository/booking-repository');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      const flightId = data.flightId;
      const flightUrl = `${FLIGHT_SERVICE_PATH}/${flightId}`;

      // Fetch flight
      const flightResponse = await axios.get(flightUrl);
      const flight = flightResponse.data.data;

      if (data.noOfSeats > flight.totalSeats) {
        throw new Error('Not enough seats available.');
      }

      const totalCost = flight.price * data.noOfSeats;
      const bookingPayload = { ...data, totalCost, status: 'Inprocess' };

      // Create booking
      const booking = await this.bookingRepository.create(bookingPayload);

      // Update flight seats
      try {
        await axios.patch(flightUrl, {
          totalSeats: flight.totalSeats - data.noOfSeats
        });
      } catch (err) {
        // Rollback booking if seat update fails
        await this.bookingRepository.deleteById(booking.id);
        throw new Error('Booking failed: unable to update flight seats.');
      }

      return booking;
    } catch (error) {
      console.log('Error in BookingService.createBooking:', error.message);
      throw error;
    }
  }

  async getAllBookings() {
    return this.bookingRepository.getAll();
  }

  async getBookingById(id) {
    const booking = await this.bookingRepository.getById(id);
    if (!booking) throw new Error('Booking not found');
    return booking;
  }
}

module.exports = { BookingService };
