'use strict';
const {
  Model
} = require('sequelize');
const order_items = require('./order_items');
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Delivery.hasOne(order_items,{foreignKey:"deliveryId",as:"order-items"});
    }
  }
  Delivery.init({
    deliveryDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Delivery',
  });
  return Delivery;
};