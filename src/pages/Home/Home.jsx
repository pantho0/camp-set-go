import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/Banner";
import BestSelling from "../../components/home/BestSelling";
import CallToAction from "../../components/home/CallToAction";
import Categories from "../../components/home/Categories";
import Faq from "../../components/home/Faq";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Camp-Set-Go || Home</title>
      </Helmet>
      <Banner />
      <BestSelling />
      <Categories />
      <FeaturedProducts />
      <CallToAction />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Home;
