'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Dish)
    }
  };
  Order.init({
    UserId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'User',
          key: 'id',
          as: 'userId',
      }
    },
    DishId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Dish',
          key: 'id',
          as: 'dishId',
      }
    },
    note: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};