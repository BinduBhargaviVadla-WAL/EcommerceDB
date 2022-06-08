'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(Merchant,{through:'Merchant_Category'});
      Category.hasMany(models.merchant_category, {
        foreignKey: "categoryId",
      });
      Category.hasMany(models.Product, {
        foreignKey: "categoryId",
        as: "products",
      });
    }
  }
  Category.init({
    categoryName: DataTypes.STRING,
    categoryDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};