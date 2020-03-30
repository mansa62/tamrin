const controller = require("app/http/controllers/controller")

class homeController extends controller {
    index(req, res) {
        // res.json(this.msg());
        res.render("home");

    }

    msg() {
        return 'home page...!'
    }
}

module.exports = new homeController;