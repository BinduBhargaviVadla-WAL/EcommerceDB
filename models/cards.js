'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cards.belongsTo(Users,{foreignKey:"userId"})
      
    }
  }
  Cards.init({
    cardNo: DataTypes.BIGINT,
    cvv: DataTypes.INTEGER,
    expiryDate: DataTypes.DATE,
    cardHolderName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Cards;
};