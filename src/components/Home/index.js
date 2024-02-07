import FeatureProduct from "./FeatureProduct";
import HeroSection from "../HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";

const data = {
    name: "Krishna Kart",
    description : 'Your Ultimate Tech Haven! 🌟 Explore cutting-edge electronics at unbeatable prices. Elevate your tech game with the latest gadgets, from sleek smartphones to powerful laptops. Shop smart, shop Krishna Kart –  Where Innovation Meets Affordability! 🚀',
    type : 'home',
    imgUrl : 'hero.jpg'
};

const Home = () => {
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;