import { Module } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService, UserEntity],
  exports: [UserService, UserEntity],
})
export class UserModule {}
