const express = require('express');
const router = express.Router();

//admin Route
const adminRouter = require("./admin");
router.use("/admin", adminRouter);

//Home Route
const homeRouter = require("./home");
router.use("/", homeRouter);


module.exports = router;