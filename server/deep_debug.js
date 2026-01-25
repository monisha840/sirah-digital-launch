const fs = require('fs');
const log = (msg) => {
    console.log(msg);
    fs.appendFileSync('deep_debug.txt', msg + '\n');
};

if (fs.existsSync('deep_debug.txt')) fs.unlinkSync('deep_debug.txt');

try {
    log('--- Deep LeadRoutes Test ---');

    log('Testing leadController...');
    const ctrl = require('./controllers/leadController');
    log('ctrl exists: ' + !!ctrl);
    log('createLead: ' + typeof ctrl.createLead);
    log('getLeads: ' + typeof ctrl.getLeads);
    log('updateLead: ' + typeof ctrl.updateLead);
    log('deleteLead: ' + typeof ctrl.deleteLead);

    log('Testing authMiddleware...');
    const mid = require('./middleware/authMiddleware');
    log('mid exists: ' + !!mid);
    log('protect: ' + typeof mid.protect);
    log('admin: ' + typeof mid.admin);

    log('Testing leadRoutes...');
    const routes = require('./routes/leadRoutes');
    log('routes exists: ' + !!routes);
    log('routes type: ' + typeof routes);

    log('--- All deep tests passed ---');
} catch (e) {
    log('ERROR: ' + e.message);
    log(e.stack);
}
