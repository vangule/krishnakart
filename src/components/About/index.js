import HeroSection from "../../components/HeroSection";
import { useProductContext } from "../../context/productContex";

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
