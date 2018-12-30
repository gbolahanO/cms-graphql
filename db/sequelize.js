require('dotenv').config({
  path: './variables.env'
})
import { Sequelize } from 'sequelize'
const sequelize = new Sequelize(`${process.env.DATABASE}`, `${process.env.USER}`, `${process.env.PASSWORD}`, {
  host: `${process.env.HOST}`,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

export default sequelize;