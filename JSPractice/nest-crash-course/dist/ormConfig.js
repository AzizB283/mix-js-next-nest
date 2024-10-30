"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Desk@123',
    database: 'db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormConfig.js.map