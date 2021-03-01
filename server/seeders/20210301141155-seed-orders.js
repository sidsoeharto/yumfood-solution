'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [{
        UserId: 2,
        DishId: 4,
        note: 'Sedikit Pedas',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        DishId: 3,
        note: 'Tanpa Kecap',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', null, {})
  }
};
