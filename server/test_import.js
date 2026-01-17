try {
    console.log('Testing import of leadController...');
    const ctrl = require('./controllers/leadController');
    console.log('Import successful');
    console.log('Exports:', Object.keys(ctrl));
} catch (e) {
    console.error('IMPORT ERROR MESSAGE:', e.message);
}
