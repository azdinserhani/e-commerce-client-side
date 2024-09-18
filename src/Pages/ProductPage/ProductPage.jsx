import { Add, Remove } from "@mui/icons-material";
import "./ProductPage.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userRequest } from "../../axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice.js";
function ProductPage() {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState("");
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const res = await userRequest.get("/api/products/find/" + id);
      setProduct(res.data.data);
    };
    getProduct();
  }, []);
  console.log(product);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity: count, color }));
  };
  return (
    <div className="productPage">
      <div className="wrapper">
        <div className="left">
          <img src={product.img} alt="" />
        </div>
        <div className="right">
          <div className="textContainer">
            <h2>{product.title}</h2>
            <span>${product.price} USD</span>
            <div className="colors">
              {product.colors &&
                product.colors.map((item, index) => {
                  return (
                    <div className="innerColor" key={index}>
                      <div
                        onClick={() => setColor(item)}
                        className="color"
                        style={{ backgroundColor: item }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            <p>{product.desc}</p>
            <div className="actions">
              <div className="count">
                <div
                  className="icon"
                  onClick={() => setCount(count > 1 ? count - 1 : 1)}
                >
                  <Remove />
                </div>
                <span>{count}</span>
                <div className="icon" onClick={() => setCount(count + 1)}>
                  <Add />
                </div>
              </div>
              <button onClick={handleClick}>add to cart</button>
            </div>
            <button className="buyBtn">buy it now</button>
            <div className="info">
              <div className="icon">
                <LocalShippingOutlinedIcon fontSize="large" />
              </div>

              <p>
                Estimate delivery times: 12-26 days (International), 3-6 days
                (United States).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
