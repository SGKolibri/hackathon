const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const vehicleSchema = new mongoose.Schema({
    things: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
}
);

module.exports = mongoose.model('VehicleSchema', vehicleSchema);