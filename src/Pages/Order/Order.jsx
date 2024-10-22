import "./Order.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/apiCalls.js";
import OrderCard from "../../Components/OrderCard/OrderCard.jsx";
const Order = () => {
  const dispatch = useDispatch();
  const user = useSelector((stat) => stat.user.currentUser);
  const orders = useSelector((stat) => stat.orders.order);
  console.log(orders);

  useEffect(() => {
    getAllOrders(dispatch, user.info._id);
  }, []);
  return (
    <div className="orderContainer">
      <h1>My Orders</h1>
      {orders.map((item) => {
        return <OrderCard item={item} />;
      })}
    </div>
  );
};

export default Order;