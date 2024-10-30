import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Desk@123',
  database: 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};

export default config;
