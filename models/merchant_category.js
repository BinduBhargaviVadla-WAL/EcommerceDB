'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merchant_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      merchant_category.belongsTo(models.Merchant, {
        foreignKey: "marchantId",
      });
      merchant_category.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
    }
  }
  merchant_category.init({
    merchantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'merchant_category',
  });
  return merchant_category;
};