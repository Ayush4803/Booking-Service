const {Booking}= require('./models/index')


class BookingRepository{
    async create(data){
        try {
           const booking= await Booking.create(data);
           return booking; 
        } catch (error) {
             console.log("Something went wrong while creating:", error);
            throw error;
        }
    }


    
}

module.exports= BookingRepository;