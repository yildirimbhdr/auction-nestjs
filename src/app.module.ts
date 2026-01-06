import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    load: [databaseConfig],
  }),],
})
export class AppModule { }
