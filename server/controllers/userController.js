const User = require('../models/user')
const { hashPass, checkPass } = require('../helpers/hashPassword')
const { generateToken } = require('../helpers/jwt')

class UserController {

    static readAll (req,res,next) {
        User.find({})
            .then(function (users) {
                res.status(200).json(users)
            })
            .catch(next)
    }

    static create(req,res,next) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        .then(function (user) {
            res.status(201).json({user, message: `Thank You for Trusting Us :)`})
        })
        .catch(next)
    };

    static login (req,res,next) {
        User.findOne({username: req.body.username})
            .then(function (user) {
                if (user && checkPass(req.body.password, user.password)) {

                    let payload = {
                        id: user.id,
                        username: user.username
                    }

                    let token = generateToken(payload)

                    res.status(202).json({token, message: `Welcome ${user.username}, I Hope you enjoy your day! :)`})

                }else {
                    next ({status: 403, message: 'Invalid Username / Password!!'})
                }
            })
            .catch(next)
    }

}

module.exports = UserController