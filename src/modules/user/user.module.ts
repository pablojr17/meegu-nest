import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../../database/PrismaService';
import { HttpModule } from '@nestjs/axios';
import { ViacepService } from 'src/services/viacep';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, ViacepService],
})
export class UserModule {}
