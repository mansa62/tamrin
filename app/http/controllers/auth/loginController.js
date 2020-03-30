const controller = require("app/http/controllers/controller")

class loginController extends controller {
    showLogForm(req, res) {

        res.render("login");

    }


}

module.exports = new loginController;