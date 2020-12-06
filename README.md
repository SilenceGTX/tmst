后端环境搭建案例：TypeScript + MySQL + Sequelize + TSOA

## 如何使用
`npm install`安装依赖库。  
`npx sequelize-cli db:migrate`创建表。  
`npx sequelize-cli db:migrate:undo`删除表。  
`npx sequelize-cli db:seed:all`加载数据。  
`npx sequelize-cli db:seed:undo:all`卸载数据。  
`npm start`启动，后端默认地址为http://localhost:3000  

可以向http://localhost:3000/project/all 发送GET请求。
