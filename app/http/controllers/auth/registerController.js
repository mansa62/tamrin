const controller = require("app/http/controllers/controller")

class registerController extends controller {
    showRigForm(req, res) {

        res.render("register");

    }


    registerProccess(req, res, next) {
        //res.json(req.body);
        console.log(this.validationData(req, res, next))
        this.validationData(req, res, next)
            .then(result => {
                res.json(result);
            })


    }

    validationData(req, res, next) {
        req.checkBody('name', 'فیلدنام نمیتواند خالی بماند').notEmpty();
        req.checkBody('name', 'فیلدنام نمیتواند کتر از5 کاراکترباشد').isLength({ min: 5 });
        req.checkBody('email', 'فیلد ایمیل نمیتواندخالی باشد').notEmpty();
        req.checkBody('email', 'فیلد ایمیل معتبر نیست').isEmail();
        req.checkBody('password', 'فیلدپسورد نمیتواند خالی بماند').notEmpty();
        req.checkBody('password', 'فیلد پسورد نمیتواندکتراز8کاراکترباشد').isLength({ min: 8 });
        return req.getValidationResult()
            .then(result => {
                const errors = result.array();
                const message = [];
                errors.forEach(err => message.push(err.msg));
                if (message.length == 0)
                    return true;
                return false;
            })
            .catch(err => console.log(err))


    };
}

module.exports = new registerController;