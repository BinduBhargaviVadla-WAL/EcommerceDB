'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReturnExchange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReturnExchange.belongsTo(models.order_items,{foreignKey:"order_itemsId"})
    }
  }
  ReturnExchange.init({
    reason: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ReturnExchange',
  });
  return ReturnExchange;
};