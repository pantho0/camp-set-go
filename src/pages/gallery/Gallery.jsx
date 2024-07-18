import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useAxios from "../../components/hooks/useAxios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Gallery = () => {
  const axiosPublic = useAxios();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosPublic("/products");
      return data;
    },
  });

  //   const progressCircle = useRef(null);
  //   const progressContent = useRef(null);
  //   const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {products?.data?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="h-screen flex justify-center items-center my-10">
              <img src={item?.images[0]} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Gallery;
