import react from "react";
import reactDom from "react-dom";

// css file adding to project
import "./index.css";
import { books } from "./books";
import Book from "./Book"
import RupeshG from "./navbar"

const BookList = function () {
  return (
    <react.Fragment>
      <RupeshG></RupeshG>
      <section className="booklist">
        {books.map((book) => {
          return (
            <Book key={book.id} {...book} />
          )
        })
        }
      </section>
    </react.Fragment>
  )
}

reactDom.render(<BookList />, document.getElementById("root"))