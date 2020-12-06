"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes/routes");
const db = require("./models/sequelize");
// 创建一个express实例
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
routes_1.RegisterRoutes(app); // 添加路由 
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
