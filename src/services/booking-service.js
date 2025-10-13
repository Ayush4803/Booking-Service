const axios = require('axios');
const { BookingRepository } = require('../repository/booking-repository');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  // Create a booking
  async createBooking(data) {
    try {
      const flightId = data.flightId;
      const getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/${flightId}`;
      const flightResponse = await axios.get(getFlightRequestURL);
      const flight = flightResponse.data.data;

      //console.log("FROM BOOKING SERVICE", flight);

      return flight;
    } catch (error) {
      console.log('Error fetching flight by id:', error.message);
      throw error;
    }
  }
}

module.exports = { BookingService };
