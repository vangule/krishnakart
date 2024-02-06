import { NavLink } from "react-router-dom";
import { Wrapper, Button } from "./styles";

const HeroSection = ({ myData }) => {
  const { name = '' } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
                Your Ultimate Tech Haven! 🌟
                Explore cutting-edge electronics at unbeatable prices.
                Elevate your tech game with the latest gadgets,
                from sleek smartphones to powerful laptops. Shop smart, shop Krishna Kart – 
                Where Innovation Meets Affordability! 🚀
            </p>
            <NavLink to="/products">
              <Button>show now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photos"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
