const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { createLead, getLeads } = require('../controllers/leadController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post(
    '/',
    [
        check('firstName', 'First name is required').not().isEmpty(),
        check('lastName', 'Last name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('message', 'Message is required').not().isEmpty(),
    ],
    createLead
);

router.get('/', protect, admin, getLeads);

module.exports = router;
