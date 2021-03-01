const { Order, User, Dish } = require('../models/index')

class OrderController {
    static readOrder (req, res, next) {
      User.findOne({
        where: {
          id: Number(req.userData.id)
        },
        attributes: { exclude: ['password'] },
        include: [{
          model: Order,
          attributes: { include: ['id'] },
          order: [['id', 'ASC']],
          include: [{
            model: Dish,
            order: [['id', 'ASC']]
          }]
        }]
      })
        .then(order => {
          let totalPrice = 0
          order.Orders.map(el => {
            totalPrice += el.Dish.price
          })
        })
    }

    static addOrder (req, res, next) {
      const payload = {
        userId: Number(req.userData.id),
        dishId: Number(req.body.dishId),
        note: req.body.note,
        quantity: req.body.quantity
      }
      let status = 200;

      Order.findOne({
        where: {
          dishId: payload.dishId
        }
      })
        .then(order => {
          if (order) {
            payload.quantity += order.quantity
            return order.update(payload, { returning: true })
          } else {
            status = 201
            return Order.create(payload)
          }
        })
        .then(order => {
          if (status === 200) {
            res.status(200).json(order)
          } else {
            res.status(201).json(order)
          }
        })
        .catch(err => {
          next(err)
        })
    }

    static updateOrder (req, res, next) {
      const orderId = Number(req.params.orderId)
      const payload = {
        userId: Number(req.userData.id),
        dishId: Number(req.body.dishId),
        note: req.body.note,
        quantity: req.body.quantity
      }

      Order
        .findByPk(orderId)
        .then(order => {
          const { userId } = req.userData.id;
          if ( order.userId !== userId ) {
            next({name: 'ACCESS_DENIED'})
          }
          return Order.update(payload, {
            where: { id: orderId }
          })
        })
        .then(updatedOrder => {
          if (!updatedOrder) {
            next({name: 'NOT_FOUND'})
          } else {
            res.status(200).json(payload)
          }
        })
        .catch(err => {
          next(err)
        })
    }

    static deleteOrder (req, res, next) {
      const orderId = Number(req.params.orderId)

      Order
        .findByPk(orderId)
        .then(order => {
          const { userId } = req.userData.id;
          if ( order.userId !== userId ) {
            next({name: 'ACCESS_DENIED'})
          } else if (!order) {
            next({name: 'NOT_FOUND'})
          }
          return Order.destroy()
        })
        .then(() => {
          res.status(200).json({msg: "Successfully deleted order"})
        })
        .catch(err => {
          next(err)
        })
    }
}

module.exports = OrderController