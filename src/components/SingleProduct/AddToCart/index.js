import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "../../Cart/CartAmountToggle";
import { NavLink } from "react-router-dom";
import Button from '../../common/Button';
import { useCartContext } from "../../../context/cart_context";
import { Container } from './styles';

const AddToCart = ({ product = {} }) => {
  const { id, colors, stock } = product || {};

  const { addToCart = () => {} } = useCartContext();


  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Container>
      <div className="colors">
        <p>
          Color:
          {(colors || []).map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button text="add to cart"></Button>
      </NavLink>
    </Container>
  );
};

export default AddToCart;
