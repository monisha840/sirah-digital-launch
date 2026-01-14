const mongoose = require('mongoose');

const leadSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please add a first name'],
        },
        lastName: {
            type: String,
            required: [true, 'Please add a last name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
        },
        phone: {
            type: String,
        },
        company: {
            type: String,
        },
        message: {
            type: String,
            required: [true, 'Please add a message'],
        },
        status: {
            type: String,
            enum: ['new', 'contacted', 'qualified', 'converted', 'closed'],
            default: 'new',
        },
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
