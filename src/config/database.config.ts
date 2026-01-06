import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  autoLoadEntities: true,
  synchronize: process.env.MODE === 'development', // Production'da false!
  logging: process.env.MODE === 'development',
}));