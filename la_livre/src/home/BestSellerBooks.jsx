import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8))) // Correctly slice the data and set it
      .catch((error) => console.error("Error fetching books:", error)); // Handle potential fetch errors
  }, []); // Added dependency array to run the effect only once when the component mounts

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBooks;
