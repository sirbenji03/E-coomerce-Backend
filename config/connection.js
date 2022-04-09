const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// create connection to our db
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    sequelize = new Sequelize('e-commerce', 'root', '@Ambitious03!');
} else {
    sequelize = new Sequelize('e-commerce', 'root', '@Ambitious03!', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306 
    });
}

module.exports = sequelize;