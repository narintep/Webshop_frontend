import Sequelize from 'sequelize';
const sequelize = new Sequelize('webshop', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
    port: 3306
  }
});

export {
  Sequelize,
  sequelize
};