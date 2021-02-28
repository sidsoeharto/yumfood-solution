'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dish.belongsTo(models.Vendor)
    }
  };
  Dish.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name cannot be empty'
        },
        len: [4, 10]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description cannot be empty'
        }
      }
    },
    imageURL: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vendorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vendor',
        key: 'id',
        as: 'vendorId',
      }
    },
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};