const { Vendor, Dish } = require('../models/index')

class VendorController {
  static async readAll (req, res, next) {
    try {
      let vendors = await Vendor.findAll()
      res.status(200).json(vendors)
    } catch (err) {
      next(err)
    }
  }

  static async readMenu (req, res, next) {
    const id = Number(req.params.id)
    try {
      let vendor = await Vendor.findOne({
        where: { id },
        include: [{
          model: Dish,
          attributes: { exclude: ['VendorId'] }
        }]
      })
      if (!vendor) {
        next({name: 'NOT_FOUND'})
      }
      res.status(200).json(vendor)
    } catch (err) {
      next(err)
    }
  }

  static async create (req, res, next) {
    try {
      const payload = {
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        logoURL: req.body.logoURL
      }

      let newVendor = await Vendor.create(payload);
      res.status(201).json(newVendor)
    } catch (err) {
      next(err)
    }
  }

  static async update (req, res, next) {
    try {
      const id = Number(req.params.id);
      const payload = {
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        logoURL: req.body.logoURL
      }
      let vendor = await Vendor.findOne({
        where: {id}
      });

      if (!vendor) {
        next({name: 'NOT_FOUND'})
      } else {
        let updatedVendor = await Vendor.update(payload, {
          where: {id}
        })
        res.status(200).json(payload)
      }
    } catch (err) {
      next(err)
    }
  }

  static async delete (req, res, next) {
    try {
      const id = Number(req.params.id);
      
      let deleted = await Vendor.findOne({
        where: {id}
      });
      if(!deleted) {
        next({name: 'NOT_FOUND'})
      }
      await Vendor.destroy({
        where: {id}
      })
      res.status(200).json({msg: "Successfully deleted vendor"})
    } catch (err) {
      next(err);
    }
  }
}

module.exports = VendorController