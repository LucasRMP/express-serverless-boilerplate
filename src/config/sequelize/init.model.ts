import { DataTypes } from "sequelize";

import Book from "../../app/models/Book";

export function InitModel(sequelize) {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.TEXT,
    },
    {
      tableName: "book",
      createdAt: false,
      updatedAt: false,
      sequelize,
    }
  );
}
