'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Vendors', [{
        name: 'Restaurant A',
        description: 'This is Restaurant A selling chinese food',
        rating: 5,
        logoURL: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-food-and-restaurant-logo-design-and-icon-png-image_4122471.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Restaurant B',
        description: 'This is Restaurant B selling indonesian food',
        rating: 5,
        logoURL: 'https://i.pinimg.com/originals/f8/8e/89/f88e898955530880794913f0efb38755.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vendors', null, {})
  }
};
