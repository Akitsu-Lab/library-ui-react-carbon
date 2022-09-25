import "./App.css";
import "./index.scss";
import { HeadBar } from "./header.jsx";
import { BookList } from "./booklistUI";
import React, { useEffect } from "react";
import axios from "axios";

export const App = () => {

  const initialURL = "http://localhost:8080/services/v1/books";
  // const initialURL = "http://os3-285-32121.vs.sakura.ne.jp:8080/services/v1/books";
  useEffect(() => {
    console.log("booklistを取得します");
    axios.get(initialURL).then((res) => {
      // setBooklist(res.data);
      console.log(res.data);
      if (res.status !== 200) { throw new Error("APIがうまく動作していないようです") }
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <HeadBar />
      </header>
      <body className="App-body">
        🐒
        <BookList />
      </body>
      <footer>


      </footer>
    </div>
  );
};
