import "./App.css";
import "./index.scss";
import { HeadBar } from "./header.jsx";
import { BookList } from "./booklistUI";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {

  // const initialURL = "http://localhost:8080/services/v1/books";
  // const initialURL = "http://localhost:8080/services/v1/books/1";
  const initialURL = "http://os3-285-32121.vs.sakura.ne.jp:8080/services/v1/books";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("booklistを取得します");
    axios.get(initialURL).then((res) => {
      // setBooklist(res.data);
      console.log(res.data);
      setBooks(res.data);
      if (res.status !== 200) { throw new Error("APIがうまく動作していないようです") }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <HeadBar />
      </header>
      <body className="App-body">
        🐒
        <BookList />
        {/* {books.bookId}  <br />
        {books.bookTitle} <br />
        {books.bookPages} <br />
        {books.bookContent} <br /> */}
        {books.bookList[0].bookTitle} <br />
        {books.bookList[1].bookTitle} <br />
        {books.bookList[2].bookTitle} <br />
      </body>
      <footer>


      </footer>
    </div>
  );
};
