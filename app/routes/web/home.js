const express = require('express');
const router = express.Router();

//Home Routes
// router.get('/', function(req, res) {
//     res.json("home page");
// });
// var homeController = require('./../../http/controllers/homeController');
var homeController = require('app/http/controllers/homeController');
var loginController = require('app/http/controllers/auth/loginController');
var registerController = require('app/http/controllers/auth/registerController');


//router.get('/', homeController.index.bind(homeController));
router.get('/', homeController.index)
router.get('/login', loginController.showLogForm);
router.get('/register', registerController.showRigForm);
router.post('/register', registerController.registerProccess);

// router.get("/register", function(req, res) {
//     res.render("register");
// });

// router.post("/register", (req, res) => {
//     res.json(req.body);
// });


module.exports = router;