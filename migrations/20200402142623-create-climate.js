'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('climate',
            {
                "id": {
                    "type": "INTEGER(11)",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "location_id": {
                    "type": "INTEGER(11)",
                    "allowNull": false,
                    "references": {
                        "model": "location",
                        "key": "id"
                    }
                },
                "year_id": {
                    "type": "INTEGER(11)",
                    "allowNull": false,
                    "references": {
                        "model": "year",
                        "key": "id"
                    }
                },
                "sea_level": {
                    "type": "FLOAT",
                    "allowNull": true
                },
                "pollution_level": {
                    "type": "FLOAT",
                    "allowNull": true
                },
                "temperature": {
                    "type": "FLOAT",
                    "allowNull": true
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
            return queryInterface.dropTable('climate');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};
