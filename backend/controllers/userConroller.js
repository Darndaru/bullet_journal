const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/user')
const ApiError = require("../error/ApiError");

const generateJwt = (id, email) => {
  return jwt.sign({id: user.id, email,},
    process.env.SECRET_KEY,
    {expiresIn: '24h'})
}

class UserController {
  async register(req, res) {
    const {email, password} = req.body
    if (!email || !password) {
      //TODO дописать ошибку
    }
    const candidate = await User.findOne({$where: email})
    if (candidate) {
      //TODO дописать ошибку
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, password: hashPassword})
    const jwt = generateJwt(user.id, email)
    return res.json({token})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await  User.findOne({$where: email})
    if (!user) {
      return next(ApiError.internal('User not found'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Wrong password'))
    }
    const token = generateJwt(user.id, user.email)
    return res.json({token})
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }
}

module.exports = new UserController()