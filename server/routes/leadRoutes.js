import express from 'express';
const router = express.Router();
import { check } from 'express-validator';
import { createLead, getLeads, updateLead, deleteLead } from '../controllers/leadController.js';
// Auth middleware temporarily disabled for public route testing if needed, 
// but keeping the imports for future use.
// import { protect, admin } from '../middleware/authMiddleware.js';

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

router.get('/', getLeads);
router.put('/:id', updateLead);
router.delete('/:id', deleteLead);

export default router;
