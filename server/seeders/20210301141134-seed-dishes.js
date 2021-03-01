'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dishes', [{
        name: 'Dumplings',
        description: 'consist of minced meat and chopped vegetables wrapped in a thin dough skin.',
        imageURL: 'https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_894x596.jpg',
        price: 50000,
        VendorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peking Roasted Duck',
        description: 'a famous dish from Beijing, enjoying world fame, and considered as one of China’s national dishes.',
        imageURL: 'https://images.chinahighlights.com/allpicture/2019/11/c544b75a1c1c416da0cf885c_893x595.jpg',
        price: 100000,
        VendorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sate Ayam',
        description: 'Skewers of meat grilled on an extremely hot charcoal fire.',
        imageURL: 'https://photos.smugmug.com/Indonesia-2016/i-9hLVhWh/0/X3/indonesian-sate-ayam-1-X3.jpg',
        price: 50000,
        VendorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ayam Bakar Taliwang',
        description: 'Grilled chicken originates from the island of Lombok, and it’s popular with spicy grilled chicken lovers',
        imageURL: 'https://photos.smugmug.com/Indonesia-2016/i-Q4M8Pkt/0/X3/ayam-taliwang-jakarta-1-X3.jpg',
        price: 100000,
        VendorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dishes', null, {})
  }
};
