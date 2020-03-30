const express = require('express');
const router = express.Router();

var adminController = require('./../../http/controllers/admin/adminController');
router.get('/', adminController.index);
router.get('/course', adminController.course);

//admin Routes
// router.get('/', function(req, res) {
//     res.json("dashboard page");
// });


module.exports = router;