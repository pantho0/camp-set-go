import Banner from "../../components/home/Banner";
import BestSelling from "../../components/home/BestSelling";
import Categories from "../../components/home/Categories";
import Faq from "../../components/home/Faq";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <BestSelling />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Home;
