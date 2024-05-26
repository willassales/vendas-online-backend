import { Module } from '@nestjs/common';
import { UserController } from './UserController';

@Module({
  controllers: [UserController]
})
export class UserModule {}
