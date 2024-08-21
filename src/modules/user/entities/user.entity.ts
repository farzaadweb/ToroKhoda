import { Optional } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

export type UserAttributes = {
  id: string;
  fullName: string;
  password: string;
  email: string;
  age: Date;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type UserCreationAttributes = Optional<UserAttributes, "id" | "email" | "age" | "isVerified">;

@Table({
  tableName: "users",
  freezeTableName: true,
})
export class UserEntity extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    validate: {
      isUUID: 4,
    },
  })
  declare id: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  fullName: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
    validate: { isEmail: true },
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    validate: { isDate: true },
  })
  age: Date;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isVerified: boolean;

  @Column({
    allowNull: false,
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  declare createdAt: Date;

  @Column({
    allowNull: false,
    type: DataType.DATE,
  })
  declare updatedAt: Date;
}
