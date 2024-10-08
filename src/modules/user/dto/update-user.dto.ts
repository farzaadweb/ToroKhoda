import { PartialType } from "@nestjs/mapped-types";
import { IsOptional } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  fullName?: string;

  @IsOptional()
  isVerified?: boolean;

  @IsOptional()
  age?: Date;

  @IsOptional()
  email?: string;

  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  password?: string;
}
