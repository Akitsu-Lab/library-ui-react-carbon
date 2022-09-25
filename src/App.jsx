import "./App.css";
import "./index.scss";
import { HeadBar } from "./header.jsx";
import { BookList } from "./booklistUI";

export const App = () => {
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
