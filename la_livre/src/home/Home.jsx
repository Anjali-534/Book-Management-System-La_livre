import React from "react";
import Banner from "../components/banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const Home = () => {
  return (
    // <div className="h-screen">
    //   <div className="h-screen">Home</div>
    //   <div className="h-screen bg-red-500"></div>{" "}
    //   {/* Corrected background color */}

    // </div>
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
