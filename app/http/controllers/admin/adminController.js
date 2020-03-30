class adminController {
    index(req, res) {
        res.json("admin page...!");
    }

    course(req, res) {
        res.json("course page...!");
    }
}

module.exports = new adminController;