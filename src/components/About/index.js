import HeroSection from "../../components/HeroSection";
import { useProductContext } from "../../context/product_contex.js";

const data = {
    name: "Krishna Ecommerce",
    description : 'Discover the forefront of technology with unbeatable deals at Krishna Kart! Immerse yourself in cutting-edge electronics, from stylish smartphones to high-performance laptops. Elevate your tech experience without breaking the bank. Experience the perfect blend of innovation and affordability – Shop smart at Krishna Kart! 🌟🚀',
    type : 'about',
    imgUrl : 'online-fashion.png'
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
