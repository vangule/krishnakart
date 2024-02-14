import { NavLink } from "react-router-dom";
import Button from '../common/Button';
import { Wrapper } from "./styles";

const HeroSection = ({ myData }) => {
  const { name = '', description = '', type = '', imgUrl = '' } = myData || {};

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            {type === 'home' && <p className="intro-data">Welcome to </p>}
            <h1> {name} </h1>
            <p>{description}</p>
            {type === 'home' && <NavLink to="/products">
              <Button text="show now" />
            </NavLink>}
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src={`images/${imgUrl}`}
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
