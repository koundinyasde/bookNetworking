import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface book_networkingAttributes {
  id: number;
  title: string;
  isbn: string;
  user_id: number;
  is_active: number;
  created_on: Date;
  updated_on?: Date;
}

export type book_networkingPk = "id";
export type book_networkingId = book_networking[book_networkingPk];
export type book_networkingOptionalAttributes = "id" | "is_active" | "created_on" | "updated_on";
export type book_networkingCreationAttributes = Optional<book_networkingAttributes, book_networkingOptionalAttributes>;

export class book_networking extends Model<book_networkingAttributes, book_networkingCreationAttributes> implements book_networkingAttributes {
  id!: number;
  title!: string;
  isbn!: string;
  user_id!: number;
  is_active!: number;
  created_on!: Date;
  updated_on?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof book_networking {
    return book_networking.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'book_networking',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
