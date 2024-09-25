import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/all-books")
      .then((res) => res.json())
      .then(
        (data) => setBooks(data.slice(1, 8)) // Correctly slice to get the 5th to 8th books
      );
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
