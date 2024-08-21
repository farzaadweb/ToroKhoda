import * as classValidator from "class-validator";

export class CreateUserDto {
  @classValidator.IsString()
  @classValidator.IsNotEmpty()
  fullName: string;

  @classValidator.Matches(/^(?:(?:\+|00)\d{1,3}[-\s]?)?(?:\(\d+\)|\d+)(?:[-\s]?\d+)*$/i)
  phoneNumber: string;

  @classValidator.IsString()
  @classValidator.IsNotEmpty()
  password: string;

  @classValidator.IsOptional()
  @classValidator.IsEmail()
  email?: string;

  @classValidator.IsOptional()
  @classValidator.IsDate()
  age?: Date;

  @classValidator.IsOptional()
  @classValidator.IsBoolean()
  isVerified?: boolean;
}
