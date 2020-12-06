import { Sequelize } from 'sequelize-typescript';
import * as models from "./index"; //加入models
var node_env = process.env.NODE_ENV || "development";
const mysqlConfig = require("../config/database")[node_env];

console.log(mysqlConfig)
export var sequelize = new Sequelize(mysqlConfig);
sequelize.authenticate();

sequelize.addModels([
    models.Project //加入Project
]);