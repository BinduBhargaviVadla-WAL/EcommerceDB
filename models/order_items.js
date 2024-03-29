'use strict';
const {
  Model
} = require('sequelize');
const product = require('./product');
module.exports = (sequelize, DataTypes) => {
  class order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_items.belongsTo(models.product,{foreignKey:"productId"});
      order_items.belongsTo(models.Delivery,{foreignKey:"deleiveryId"});
      order_items.hasOne(models.returnexchange,{foreignKey:"order_itemsId",as:"order_items"})
      order_items.belongsTo(models.orders,{foreignKey:"orderId"})
      
    }
  }
  order_items.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_items',
  });
  return order_items;
};