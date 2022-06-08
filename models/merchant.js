'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.belongsToMany(Category,{through:'Merchant_Category'});
      Merchant.hasMany(models.merchant_category, {
        foreignKey: "merchantId",
      });
      Merchant.hasMany(models.Product,{
        foreignKey:"merchantId",
        as:"products"
      })
    }
  }
  Merchant.init({
    companyName: DataTypes.STRING,
    merchantName: DataTypes.STRING,
    mobile: DataTypes.BIGINT,
    email: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalpin: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};