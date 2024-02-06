import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Container } from './styles';

const Stars = ({ stars = 0 }) => {
    return [...Array(5)].map((item, index) => {
        let number = index + 0.5;
    return (
        <span key={item}>
          {stars >= index + 1 ? (
            <FaStar className="icon" />
          ) : stars >= number ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon" />
          )}
        </span>
    );
});
};

const Ratings = ({ stars = 0, reviews = 0 }) => {
  return (
    <Container>
      <div className="icon-style">
        <Stars stars={stars} />
        <p>({reviews} customer reviews)</p>
      </div>
    </Container>
  );
};

export default Ratings;
