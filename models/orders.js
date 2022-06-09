'use strict';
const {
  Model
} = require('sequelize');
const useraddress = require('./useraddress');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(Payment,{foreignKey:"paymentId"})
      orders.belongsTo(Users,{foreignKey:"userId"})
      orders.belongsTo(useraddress,{foreignKey:"addressId"})
      orders.belongsTo(OrderStatus,{foreignKey:"orderStatusId"})
      orders.hasMany(models.order_items,{foreignKey:"orderId",as:"orders"})
    }
  }
  orders.init({
    Total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};