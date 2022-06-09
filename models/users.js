'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(UserAddress,{
        foreignKey:"addressId",
        as:"useraddress"
      })
      Users.hasOne(models.cart,{foreignKey:"userId",as:"cart"});
      Users.hasMany(models.Cards,{foreignKey:"userId",as:"cards"});
      Users.hasMany(models.orders,{foreignKey:"userId",as:"orders"});
    }
  }
  Users.init({
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};