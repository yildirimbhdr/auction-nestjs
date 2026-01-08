import { registerAs } from "@nestjs/config";
import { entities } from "src/database/entities";

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.MODE === 'development',
  logging: process.env.MODE === 'development',
  entities: entities,
}));