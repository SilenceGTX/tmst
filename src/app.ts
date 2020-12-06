import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from "./routes/routes";
const db = require("./models/sequelize");

// 创建一个express实例
const app: express.Application = express();

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
app.use(bodyParser.json());

RegisterRoutes(app); // 添加路由 

app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
});
