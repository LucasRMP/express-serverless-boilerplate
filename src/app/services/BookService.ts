import Book from "../models/Book";

export class BookService {
  public static async saveBook(book: Book) {
    try {
      await Book.create({
        id: book.id,
        title: book.title,
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  public static async updateBook(book: Book) {
    try {
      await Book.update(
        {
          title: book.title,
        },
        {
          where: {
            id: book.id,
          },
        }
      );
    } catch (error) {
      console.error(error.name);
      throw error;
    }
  }

  public static async getBookById(bookId: string): Promise<Book> {
    try {
      const resp = await Book.findByPk(bookId);

      if (typeof resp !== "undefined" && resp !== null) {
        return resp;
      } else {
        throw new Error(`Book ${bookId} not found`);
      }
    } catch (error) {
      console.error(error.name);
      throw error;
    }
  }

  public static async listBooks(): Promise<Book[]> {
    try {
      return await Book.findAll();
    } catch (error) {
      console.error(error.name);
      throw error;
    }
  }

  public static async deleteBook(bookId: string) {
    try {
      const deletedRows = await Book.destroy({
        where: {
          id: bookId,
        },
      });

      console.log(`deleted ${deletedRows} rows`);
      if (deletedRows === 0) {
        throw new Error(`Book ${bookId} not found`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
