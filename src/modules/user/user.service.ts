import { HttpException, Inject, Injectable } from "@nestjs/common";
import { FindOptions } from "sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserAttributes, UserEntity } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(@Inject(UserEntity) private userEntity: typeof UserEntity) {}

  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findAll(options?: FindOptions<UserAttributes>): Promise<UserEntity[] | HttpException> {
    try {
      console.log(this.userEntity);

      return this.userEntity.findAll<UserEntity>(options);
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
