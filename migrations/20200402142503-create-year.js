'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('year',
            {
                "id": {
                    "type": "INTEGER(11)",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "label": {
                    "type": "INTEGER(4)",
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
            return queryInterface.dropTable('year');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};
