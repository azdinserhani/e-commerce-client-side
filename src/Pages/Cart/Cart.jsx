import { Add, Remove } from "@mui/icons-material";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartSlice.js";
import Box from "../../../public/box.png";
import { useEffect, useState } from "react";
import { userRequest } from "../../axios.js";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
const Cart = () => {
  const key = import.meta.env.VITE_APP_STRIPE_KEY;

  const dispatch = useDispatch();
  const cart = useSelector((stat) => stat.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(clearCart());
  };
 
  const makeRequest = async () => {
    const stripe = await loadStripe(key);
    const body = {
      products: cart,
    };
    const res = await userRequest.post("/api/payment", body);

    const session = await res.data;
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };
  return (
    <div className="cart">
      <div className="wrapper">
        <div className="head">
          <h1>Your cart</h1>
          <p onClick={handleClick}>clear all</p>
        </div>
        <div className="container">
          <div className="left">
            {cart.products.length === 0 && (
              <div className="empty">
                <span>You cart is Empty</span>
                <img src={Box} alt="" />
              </div>
            )}
            {cart.products.map((product) => {
              return (
                <div className="card">
                  <hr />
                  <div className="cardItem">
                    <div className="left">
                      <img src={product.img} alt="" />
                      <div className="productInfo">
                        <h3>{product.title}</h3>
                        <p>
                          <span>Color:</span> {product.color}
                        </p>

                        <p>
                          <span>In Stoke</span>
                        </p>
                        <p>
                          <span>Price: </span>$ {product.price}
                        </p>
                      </div>
                    </div>
                    <div className="centre">
                      <h2>Quantity:</h2>
                      <div className="count">
                        <div className="icon">
                          <Remove />
                        </div>
                        <span>{product.quantity}</span>
                        <div className="icon">
                          <Add />
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <h3>Total</h3>
                      <p>${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="right">
            <div className="card">
              <h1>Summary</h1>
              <p>
                SubTotal: <span> ${cart.totalPrice.toFixed(2)}</span>
              </p>
              <p>
                Estimated Shipping: <span>$ 10.00</span>
              </p>
              <p>
                Shipping Discount: <span> $ -10.00</span>
              </p>
              <p>
                Total: <span> ${cart.totalPrice.toFixed(2)}</span>
              </p>
              {/* <StripeCheckout
                name="ElecAzdine"
                stripeKey={key}
                description={`your total is ${cart.totalPrice}`}
                amount={cart.totalPrice * 100}
                shippingAddress
                billingAddress
                token={onToken}
              > */}
              <button onClick={makeRequest}>Checkout</button>
              {/* </StripeCheckout> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
