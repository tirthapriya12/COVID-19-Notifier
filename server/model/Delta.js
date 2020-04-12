const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DeltaSchema = new Schema({
    total_case: Array,
    Delta: {
        lastUpdated: Date,
        delta_list: {
            state: String,
            isDead: Number,
            isConfirmed: Number,
            isRecovered: Number
        }
    }
}, { timestamps: true });

module.exports = Delta = mongoose.model('delta', DeltaSchema);
