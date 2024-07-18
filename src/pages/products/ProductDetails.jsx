import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../components/ui/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../components/hooks/useAxios";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartsSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const axiosPublic = useAxios();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product = {}, refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/products/${id}`);
      return data;
    },
  });

  const handleCart = async (id) => {
    const { data } = await axiosPublic.patch(
      `/products/decrease-product/${id}`
    );
    if (data.success) {
      refetch();
      dispatch(addToCart({ ...product.data, quantity }));
      toast.success("Product added to cart");
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-0 px-4 mt-2 md:flex-row md:gap-16 md:py-16">
        <div className="w-full md:w-96 lg:w-96">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {product?.data?.images?.map((image) => (
              <SwiperSlide key={image}>
                <div className="relative h-[450px] sm:h-[450px]">
                  <img
                    alt="ecommerce"
                    className="object-cover md:object-contain object-center  md:w-full md:h-full block"
                    src={image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center md:space-y-2 md:text-left">
          <div className="space-y-2 text-center md:space-y-2 md:text-left">
            <h2 className="text-xl md:text-3xl font-bold">
              {product?.data?.name}
            </h2>
            <p className="text-lg font-medium text-orange-400 flex items-center gap-[2px]">
              Rating : {product?.data?.ratings} <FaStar />
            </p>
            <p className="text-2xl font-bold text-green-800 flex justify-center items-center md:justify-start">
              <FaDollarSign size={18} />
              {product?.data?.price}{" "}
            </p>
            <h2 className="text-xl md:text-base font-bold">
              In-Stock : {product?.data?.stockQuantity}
            </h2>
            <p className="text-slate-500">{product?.data?.description}</p>
            <div className="divider"></div>

            <div className="flex justify-center gap-2 md:justify-start md:gap-4">
              <div className="flex flex-col px-16 md:flex-row gap-2 md:px-0">
                {product?.data?.stockQuantity === 0 ? (
                  <button className="btn btn-outline cursor-not-allowed">
                    Out of stock
                  </button>
                ) : (
                  <button
                    onClick={() => handleCart(product?.data?._id)}
                    className="btn btn-outline"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
