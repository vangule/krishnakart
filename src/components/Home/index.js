import FeatureProduct from "./FeatureProduct";
import HeroSection from "../HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";

const data = {
    name: "Krishna Kart",
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