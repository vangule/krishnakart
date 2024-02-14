import { useCartContext } from "../../context/cart_context";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";
import { EmptyDiv, Wrapper, Label } from "./styles";
import Button from "../common/Button";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart?.length === 0) {
    return (
      <EmptyDiv>
        <Label>No Item in Cart</Label>
        <NavLink to="/products">
          <Button>continue Shopping</Button>
        </NavLink>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {(cart || []).map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button text="continue Shopping" />
          </NavLink>
          <Button bg="#e74c3c" text="clear cart" onClick={clearCart} />
        </div>

        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
