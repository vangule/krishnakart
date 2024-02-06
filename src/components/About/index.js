import HeroSection from "../../components/HeroSection";
import { useProductContext } from "../../context/productcontex";

const data = {
    name: "Thapa Ecommerce",
};

const About = () => {
  const { myName = '' } = useProductContext();

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
