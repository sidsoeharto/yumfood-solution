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
      Order.belongsTo(models.User)
    }
  };
  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'User',
          key: 'id',
          as: 'userId',
      }
    },
    dishId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Foods',
          key: 'id',
          as: 'foodId',
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