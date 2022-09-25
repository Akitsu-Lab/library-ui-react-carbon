import "./App.css";
import "./index.scss";
import { Button } from "@carbon/react";
import { HeadBar } from "./header.jsx";
import React, { useEffect } from "react";
import axios from "axios";

export const App = () => {

  const initialURL = "http://localhost:8080/services/v1/books";

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
      <HeadBar />
      <header className="App-header">
        <div>
          Hello Carbon! Well, not quite yet. This is the starting point for the
          Carbon tutorial.
        </div>
        <Button>Button</Button>
      </header>
    </div>
  );
};
