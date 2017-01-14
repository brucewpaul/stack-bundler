var router = require('express').Router(); //router will handle all calls to /API
var controller = require('../controllers');

//now we will define what to do with the different types of requests sent to /items (within the /api/ that this router is made to handle)

router.get('/items', controller.retreiveAll);
router.post('/items', controller.createOne);

module.exports = router;
