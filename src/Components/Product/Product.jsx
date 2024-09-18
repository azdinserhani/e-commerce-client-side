import "./Product.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useNavigate } from "react-router-dom";
const Product = ({ item }) => {
  const navigation = useNavigate();
  return (
    <div className="product">
      <div className="card">
        <div className="imgContainer">
          <img src={item.img} alt="" />
        </div>
        <div className="info">
          <h4>{item.title}</h4>
          <p>$ {item.price} </p>
        </div>
        <div className="options">
          <div className="opt">
            <MoreHorizOutlinedIcon />
          </div>
          <div
            className="opt"
            onClick={() => navigation("/product/" + item._id)}
          >
            <SearchOutlinedIcon />
          </div>
          <div className="opt">
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
