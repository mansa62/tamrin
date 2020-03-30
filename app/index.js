const http = require("http");
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
//const { check, validationResult } = require('express-validator');
const validator = require('express-validator');
const session = require('express-session');
const mongostore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');




module.exports = class Application {
    constructor() {
        this.setUpExpress();
        this.setMongConnection();
        this.setCunfig();
        this.setRoules();

    };



    setUpExpress() {
        const server = http.createServer(app);
        server.listen(3000, () => console.log("server running...!"));
    }

    setMongConnection() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/tamrin', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });


    };

    setCunfig() {
        app.use(express.static("public"));
        app.set('view engine', 'ejs');
        app.set('views', path.resolve('./resource/views'));
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: true }));
        app.use(validator());
        app.use(session({
            secret: "mysecretkey",
            resave: true,
            saveUninitialized: true,
            store: new mongostore({ mongooseConnection: mongoose.connection })
        }));
        app.use(cookieparser('mysecretkey'));
        app.use(flash());





    }
    setRoules() {
        app.use(require('./routes/web'));
        app.use(require('./routes/api'));

    }

};