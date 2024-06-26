'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsersWorkingDays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Users',
          key: 'id'
        }
      },
      workingDayId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // WorkingDays hasMany Users n:n
          model: 'WorkingDays',
          key: 'id'
        }
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
    return queryInterface.dropTable('UsersWorkingDays');
  }
};

module.exports = (sequelize, DataTypes) => {
  const UsersWorkingDay = sequelize.define('UsersWorkingDay', {
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {});
  UsersWorkingDay.associate = function(models) {
    UsersWorkingDay.belongsTo(models.User, {foreignKey: 'userId'})
    UsersWorkingDay.belongsTo(models.WorkingDay, {foreignKey: 'workingDayId'})
  };
  return UsersWorkingDay;
};