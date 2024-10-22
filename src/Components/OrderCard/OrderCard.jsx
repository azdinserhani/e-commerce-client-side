import "./OrderCard.scss";

const OrderCard = ({ item }) => {
  const date = new Date(item.createdAt).toLocaleDateString("en-Gb");
  console.log(item);

  return (
    <div className="orderCard">
      <div className="top">
        <div className="orderInfo">
          <p>
            Order : <span>#{item._id}</span>
          </p>
          <p>
            Placed On: <span>{date}</span>
          </p>
          <p>
            Status: <span>{item.orderStatus}</span>
          </p>
        </div>
        <div className="productsInfo">
          <span>Order Summary:</span>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>{" "}
              </tr>
            </thead>
            <tbody>
              {item.products.map((item) => {
                return (
                  <tr>
                    <td>
                      <img src={item.productId.img} alt="" />
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>${item.quantity * item.price}</td>{" "}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bottom">
        <div className="shippingInfo">
          <span>Shipping Details:</span>
          <div className="item">
            <p>Shipping Address:</p>
            <span>{item.shippingAddress}</span>
          </div>
          <div className="item">
            <p>Payment Method:</p>
            <span>{item.paymentMethod}</span>
          </div>
        </div>
        <div className="total">
          <p>
            Total : <span> ${item.totalAmount * 0.01}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
