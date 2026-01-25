const fs = require('fs');
const log = (msg) => {
    console.log(msg);
    fs.appendFileSync('debug_out.txt', msg + '\n');
};

if (fs.existsSync('debug_out.txt')) fs.unlinkSync('debug_out.txt');

try {
    log('--- Route Import Test ---');

    const auth = require('./routes/authRoutes');
    log('authRoutes: ' + typeof auth + ' (isRouter: ' + (auth && auth.name === 'router') + ')');

    const leads = require('./routes/leadRoutes');
    log('leadRoutes: ' + typeof leads + ' (isRouter: ' + (leads && leads.name === 'router') + ')');

    const content = require('./routes/contentRoutes');
    log('contentRoutes: ' + typeof content + ' (isRouter: ' + (content && content.name === 'router') + ')');

    log('--- All tests passed ---');
} catch (e) {
    log('ERROR: ' + e.message);
    log(e.stack);
}
