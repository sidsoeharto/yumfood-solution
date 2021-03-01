const { User } = require('../models');

const userAuthorization = async (req, res, next) => {
  try {
    let userId = Number(req.userData.id);
    let user = await User.findOne({
      where: {id: userId}
    });
    if (!user || user.role !== 'User') {
      next({name: 'ACCESS_DENIED'})
    }
    next()
  } catch (err) {
    next(err)
  }
}

const adminAuthorization = async (req, res, next) => {
  try {
    let userId = Number(req.userData.id);
    let user = await User.findOne({
      where: {id: userId}
    });
    if (!user || user.role !== 'Admin') {
      next({name: 'ACCESS_DENIED'})
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = {
  userAuthorization,
  adminAuthorization
}