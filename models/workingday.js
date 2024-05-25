'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WorkingDays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weekDay: {
        type: Sequelize.STRING
      },
      workingDate: {
        type: Sequelize.DATE
      },
      isWorking: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WorkingDays');
  }
};

module.exports = (sequelize, DataTypes) => {
  const WorkingDay = sequelize.define('WorkingDay', {
    weekDay: DataTypes.STRING,
    workingDate: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN
  }, {});
  WorkingDay.associate = function(models) {
    WorkingDay.belongsToMany(models.User, {through: 'UsersWorkingDays', foreignKey: 'workingDayId', as: 'employes'})
  };
  return WorkingDay;
};