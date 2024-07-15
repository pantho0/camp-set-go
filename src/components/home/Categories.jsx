import { Swiper, SwiperSlide } from "swiper/react";
import { GiBackpack } from "react-icons/gi";
import { GiCampCookingPot } from "react-icons/gi";
import { GiFlexibleLamp } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { BiBlanket } from "react-icons/bi";
import { GiBarracksTent } from "react-icons/gi";
import Container from "../ui/Container";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Categories = () => {
  return (
    <Container>
      <div className="my-50">
        <div className="flex flex-col items-center md:flex-row justify-center px-2">
          <h2 className="text-base md:text-3xl font-medium">Categories</h2>
        </div>
        <div className="mt-8 px-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center p-5 border border-shadow-500">
                <GiBarracksTent className="text-green-800" size={60} />
                <h6 className="text-sm font-bold">Tents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center p-5 border border-shadow-500">
                <BiBlanket className="text-green-800" size={60} />
                <h6 className="text-sm font-bold">Sleeping Bags</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center p-5 border border-shadow-500">
                <GiBackpack className="text-green-800" size={60} />
                <h6 className="text-sm font-bold">Backpacks</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center p-5 border border-shadow-500">
                <GiCampCookingPot className="text-green-800" size={60} />
                <h6 className="text-sm font-bold">Cooking Gear</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center p-5 border border-shadow-500">
                <GiFlexibleLamp className="text-green-800" size={60} />
                <h6 className="text-sm font-bold">Lighting</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center p-5 border border-shadow-500">
                <GrUserSettings className="text-green-800" size={60} />
                <h6 className="text-sm font-bold">Accessories</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
