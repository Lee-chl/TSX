import { useState } from "react";
import BookDetail from "./BookDetail";
import "./BookFinder.css";
import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./SearchArea";
import type { Book } from "../types/Book";
import BookContext from "../contexts/BookContext";

export default function BookFinder() {
  const [selected, setSelected] = useState<Book | null>(null);

  const selectBook = (book: Book) => {
    setSelected(book);
  };

  return (
                            // {}는 자스 표현식 객체여서 {}로한번더! 
    <BookContext.Provider value={{selectBook}}>
      <div className="BookFinder">
        <Header />
        <div className="main-content">
          <SearchArea />
          <BookDetail book={selected} />
        </div>
        <Footer />
      </div>
    </BookContext.Provider>
  );
}
