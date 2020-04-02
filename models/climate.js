module.exports = function(sequelize, DataTypes) {
  return sequelize.define('climate', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'location',
        key: 'id'
      }
    },
    year_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'year',
        key: 'id'
      }
    },
    sea_level: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pollution_level: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'climate'
  });
};
