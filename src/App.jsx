import "./App.css";
import "./index.scss";
import { Button } from "@carbon/react";
import { HeadBar } from "./header.jsx";

export const App = () => {
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
