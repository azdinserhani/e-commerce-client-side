import { useState } from "react";
import "./SideBar.scss";

const SideBar = () => {
  const [value, setValue] = useState(500);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="sidebar">
      <div className="item">
        <h2>Categories</h2>
        <a>Pc</a>
        <a>Phone</a>
        <a>Watches</a>
        <a>Headphone</a>
      </div>
      <div className="item">
        <h2>Price</h2>
        <input
          type="range"
          min={0}
          max={1000}
          value={value}
          onChange={handleChange}
        />
        <p>
          Price: <span>$0 USD - ${value} USD</span>
        </p>
      </div>
      <div className="item">
        <h2>Brand</h2>
        <a>Pc</a>
        <a>Phone</a>
        <a>Watches</a>
        <a>Headphone</a>
      </div>
    </div>
  );
};

export default SideBar;
