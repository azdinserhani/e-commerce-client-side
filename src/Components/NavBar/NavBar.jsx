import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const quantity = useSelector(stat => stat.cart.quantity)
  console.log(quantity);
  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link to={"/"}>Home</Link>
          <Link to={"/categories"}>Categories</Link>
          <Link to={"/orders"}>My orders</Link>
          <Link>Contact</Link>
        </div>
        <div className="centre">
          <h1>ElecAzdine</h1>
        </div>
        <div className="right">
          <div className="select">
            <select defaultValue={"English"}>
              <option value="English">English</option>
            </select>
          </div>
          <div className="select">
            <select defaultValue={"USD"}>
              <option value="USD">USD</option>
            </select>
          </div>

          <div className="icon">
            <SearchOutlinedIcon />
          </div>
          <div className="icon">
            <PersonOutlineOutlinedIcon />
          </div>
          <div className="icon">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="iconCart" onClick={() => navigate("/cart")}>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
