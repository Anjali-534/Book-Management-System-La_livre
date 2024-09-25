import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-black text-center">
        Our Customers
      </h2>
      <div className="mt-12 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Set slidesPerView for smaller screens
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Set slidesPerView for medium screens
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3, // Set slidesPerView for large screens
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="flex gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos maxime impedit magni repellendus dolorem iure
                  ipsam, officiis explicabo adipisci! Beatae, facere tempora
                  ullam ipsa voluptates a accusamus porro voluptatibus
                  reiciendis.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">James Clear</h5>
                <p className="text-base">CEO, ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="flex gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos maxime impedit magni repellendus dolorem iure
                  ipsam, officiis explicabo adipisci! Beatae, facere tempora
                  ullam ipsa voluptates a accusamus porro voluptatibus
                  reiciendis.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">James Clear</h5>
                <p className="text-base">CEO, ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="flex gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos maxime impedit magni repellendus dolorem iure
                  ipsam, officiis explicabo adipisci! Beatae, facere tempora
                  ullam ipsa voluptates a accusamus porro voluptatibus
                  reiciendis.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">James Clear</h5>
                <p className="text-base">CEO, ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="flex gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos maxime impedit magni repellendus dolorem iure
                  ipsam, officiis explicabo adipisci! Beatae, facere tempora
                  ullam ipsa voluptates a accusamus porro voluptatibus
                  reiciendis.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">James Clear</h5>
                <p className="text-base">CEO, ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8  px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="flex gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos maxime impedit magni repellendus dolorem iure
                  ipsam, officiis explicabo adipisci! Beatae, facere tempora
                  ullam ipsa voluptates a accusamus porro voluptatibus
                  reiciendis.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">James Clear</h5>
                <p className="text-base">CEO, ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8  px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="flex gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos maxime impedit magni repellendus dolorem iure
                  ipsam, officiis explicabo adipisci! Beatae, facere tempora
                  ullam ipsa voluptates a accusamus porro voluptatibus
                  reiciendis.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">James Clear</h5>
                <p className="text-base">CEO, ABC</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8  px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="flex gap-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos maxime impedit magni repellendus dolorem iure
                  ipsam, officiis explicabo adipisci! Beatae, facere tempora
                  ullam ipsa voluptates a accusamus porro voluptatibus
                  reiciendis.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">James Clear</h5>
                <p className="text-base">CEO, ABC</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
