const { Dish } = require('../models/index')

class DishController {
    static async create (req, res, next) {
      try {
        const id = Number(req.params.id)
        const payload = {
          name: req.body.name,
          description: req.body.description,
          imageURL: req.body.imageURL,
          price: req.body.price,
          vendorId: id
        }

        let newDish = await Dish.create(payload)
        res.status(201).json(newDish)
      } catch (err) {
        next(err)
      }
    }

    static async update (req, res, next) {
      try {
        const id = Number(req.params.id)
        const dishId = Number(req.params.dishId)
        const payload = {
          name: req.body.name,
          description: req.body.description,
          imageURL: req.body.imageURL,
          price: req.body.price,
          vendorId: id
        }

        let updatedDish = await Dish.update(payload, {
          where: {id: dishId}
        })

        if (!updatedDish) {
          next({name: 'NOT_FOUND'})
        } else {
          res.status(201).json(payload)
        }
      } catch (err) {
        next(err)
      }
    }

    static async delete (req, res, next) {
      try {
        const id = Number(req.params.id)
        const dishId = Number(req.params.dishId)

        let deleted = await Dish.findOne({
          where: {id: dishId}
        })
        if (!deleted) {
          next({name: 'NOT_FOUND'})
        }
        await Dish.destroy({
          where: {id: dishId}
        })
        res.status(200).json({msg: "Successfully deleted product"})
      } catch (err) {
        next(err)
      }
    }
}

module.exports = DishController