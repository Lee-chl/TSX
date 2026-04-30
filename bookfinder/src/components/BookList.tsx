import type { Book } from "../types/Book";
import BookItem from "./BookItem";
import "./BookList.css";

interface BookListProps {
  books: Book[];
}
export default function BookList({ books }: BookListProps) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} />
      ))}
    </div>
  );
}
