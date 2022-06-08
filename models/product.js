'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
      })
      Product.hasMany(models.ProductImages, {
        foreignKey: "productImageId",
        as:"productImages"
      })
      Product.belongsTo(models.Merchant, {
        foreignKey: "merchantId",
      })

    }
  }
  Product.init({
    ProductName: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};