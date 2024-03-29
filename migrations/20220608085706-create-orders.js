'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Total: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
      },
      orderStatusId: {
        type: Sequelize.INTEGER,
        references: {
          model: "OrderStatuses",
          key: "id",
          as: "orderStatusId",
        },
      },
      paymentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Payments",
          key: "id",
          as: "paymentId",
        },
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserAddresses",
          key: "id",
          as: "addressId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};