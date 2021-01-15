import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  Tags,
} from "tsoa";
import Book from "../models/Book";
import { BookService } from "../services/BookService";

@Tags("Book")
@Route("book")
export class BookController extends Controller {
  @Get("{id}")
  public async getBook(@Path() id: string): Promise<Book> {
    return BookService.getBookById(id);
  }

  @Get("")
  public async listBooks(): Promise<Book[]> {
    return BookService.listBooks();
  }

  @Post("")
  public async saveBook(@Body() book: Book) {
    await BookService.saveBook(book);

    return {
      status: "Book inserted",
    };
  }

  @Put("")
  public async updateBook(@Body() book: Book) {
    await BookService.updateBook(book);

    return {
      status: "Book updated",
    };
  }

  @Delete("{id}")
  public async deleteBook(@Path() id: string) {
    await BookService.deleteBook(id);

    return {
      status: "Book deleted",
    };
  }
}
