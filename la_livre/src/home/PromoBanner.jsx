import React from "react";
import { Link } from "react-router-dom";
import bookPic from "../assets/bookPicc.jpeg";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold mb-6 leading-snuh">
            2023 National Book Awards for Fiction Shortlist
          </h3>
          <Link to="/shop" className="block">
            <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Get Promotion Code
            </button>
          </Link>
        </div>
        <div>
          <img src={bookPic} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
