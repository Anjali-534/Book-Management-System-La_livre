import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  // Destructure the loader data
  const { _id, bookTitle, imageUrl } = useLoaderData();

  return (
    <div className="mt-28 px-4 lg:px-24">
      <img src={imageUrl} alt={bookTitle} className=" h-96 object-cover mb-4" />
      <h2 className="text-4xl font-bold">{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
