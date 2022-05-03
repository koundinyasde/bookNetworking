import type { Sequelize } from "sequelize";
import { book_networking as _book_networking } from "./book_networking";
import type { book_networkingAttributes, book_networkingCreationAttributes } from "./book_networking";

export {
  _book_networking as book_networking,
};

export type {
  book_networkingAttributes,
  book_networkingCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const book_networking = _book_networking.initModel(sequelize);


  return {
    book_networking: book_networking,
  };
}
