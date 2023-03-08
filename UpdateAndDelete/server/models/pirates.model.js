const mongoose = require('mongoose');
 
const PiratesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,  '{PATH} is required.'],
        minLength:[3, '{PATH} must be at least {MINLENGTH} characters.' ]
    },
    imgUrl: {
        type: String,
        required: [true,  '{PATH} is required.'],
        minLength:[3, '{PATH} must be at least {MINLENGTH} characters.' ]
    },
    treasureChests: {
        type: Number,
        required: [true,  '{PATH} is required.'],
    },
    catchPhrase: {
        type: String,
        required: [true,  '{PATH} is required.'],
    },
    crewPosition: {
        type: String,
        required: [true,  '{PATH} is required.'],
    },
    pegLeg: {
        type: Boolean,
        default: true,
        required: [true,  '{PATH} is required.'],
    },
    eyePatch: {
        type: Boolean,
        default: true,
        required: [true,  '{PATH} is required.'],
    },
    hookHand: {
        type: Boolean,
        default: true,
        required: [true,  '{PATH} is required.'],
    },
}, {timestamps: true});
 
const Pirates = mongoose.model('Pirates', PiratesSchema);
 
module.exports = Pirates;