"use strict";
module.exports =
    {
        development: {
            host: "localhost",
            port: 3306,
            database: "abc",
            dialect: "mysql",
            username: "user123",
            password: "123456",
            logging: console.log,
            maxConcurrentQueries: 100,
        },
    };
