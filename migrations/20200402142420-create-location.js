'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('location',
            {
                "id": {
                    "type": "INTEGER(11)",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "latitude": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "longitude": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false,
                    "defaultValue":Sequelize.literal('CURRENT_TIMESTAMP')
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false,
                    "defaultValue":Sequelize.literal('CURRENT_TIMESTAMP')
                }
            })
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.dropTable('location');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};
