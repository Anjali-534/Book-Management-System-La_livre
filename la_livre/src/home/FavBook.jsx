import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import FavBookImg from "../assets/bookC1.jpg";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={FavBookImg}
          alt="Favorite Book"
          className="rounded md:w-10/12"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favourite{" "}
          <span className="text-blue-600">Books Here!!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rerum
          quo error velit similique distinctio recusandae natus numquam aliquam
          voluptatum, molestiae nam commodi voluptatibus molestias facere
          deleniti iure sed! Earum!
        </p>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listings</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>

        {/* Explore More Button */}
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
