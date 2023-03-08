const PiratesController = require('../controllers/pirates.controller');
 
module.exports = app => {
    app.get('/api/pirates', PiratesController.getAllPirates);
    app.get('/api/pirates/:id', PiratesController.findoneSinglePirate);
    app.post('/api/pirates', PiratesController.createNewPirate);

}