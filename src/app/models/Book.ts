import { Model } from "sequelize";

export interface Book {
  id: number;
  title: string;
}

export default class BookModel extends Model<Book> {
  id: number;
  title: string;
}
