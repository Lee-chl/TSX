import {  useState } from "react";
import "./SearchArea.css";
import type { Book } from "../types/Book";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Pagination from "./Pagination";
import useFetch from "../hooks/useFetch";

export default function SearchArea() {
  const [query, setQuery] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);
  const url = "https://dapi.kakao.com/v3/search/book";
  const apiKey = "";
  const { documents, isend } = useFetch<Book>(query,pageNum,url,apiKey);

  const onChangeQuery = (q: string) => {
    setQuery(q);
  };

  const resetPage = () => {
    setPageNum(1);
  };

  // button 클릭 시 변경
  const pageBtnClick = (btn: string) => {
    if (btn === "NEXT") {
      setPageNum(pageNum + 1);
    } else if (btn === "PRE") {
      setPageNum(pageNum - 1);
    }
    return pageNum;
  };

  return (
    <div className="search-area">
      <SearchBar onChangeQuery={onChangeQuery} resetPage={resetPage} />
      <BookList books={documents} />
      <Pagination pageBtnClick={pageBtnClick} pageNum={pageNum} isEnd={isend} />
    </div>
  );
}
