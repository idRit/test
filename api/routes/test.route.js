module.exports = (app) => {
    const testDetails = require('../controllers/test.controller.js');

    // Create a new customer
    app.post('/api/addName', testDetails.create);

    // Retrieve all events
    app.get('/api/getAllNames', testDetails.findOne);
}