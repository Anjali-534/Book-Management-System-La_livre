import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>
      <div className="grid my-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8">
        {books.map((book) => (
          <Card key={book.id}>
            <img src={book.imageUrl} alt={book.bookTitle} className="h-96" />

            <div className="m-3">
              {" "}
              {/* Added margin 3 to the container */}
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur porro aperiam architecto eligendi reprehenderit
                libero, neque nostrum obcaecati temporibus ratione! Porro,
                consectetur ratione cupiditate esse excepturi exercitationem
                sequi ea consequuntur.
              </p>
              <button className="bg-blue-600 font-semibold text-white py-2 rounded mt-3 w-full">
                Buy Now
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
