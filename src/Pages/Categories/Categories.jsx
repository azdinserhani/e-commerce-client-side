import SideBar from "../../Components/SideBar/SideBar";
import "./Categories.scss";
import Product from "../../Components/Product/Product";
import { useEffect, useState } from "react";
import { userRequest } from "../../axios";

const Categories = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("-createdAt");
  ///?sort=createdAt&category=phones&price[lte]=1000

useEffect(() => {
  const getProduct = async () => {
    try {
      let query = "/api/products";

      // Add query parameters correctly
      const params = [];
      if (sort) {
        params.push(`sort=${sort}`);
      }
      if (category) {
        params.push(`category=${category}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      console.log(query);

      const res = await userRequest.get(query);
      console.log("response :", res);

      setData(res.data.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  getProduct();
}, [category, sort]);

  return (
    <div className="categories">
      <div className="wrapper">
        <div className="container">
          <h1>Categories</h1>
          <div className="CategoriesItem">
            <div className="item" onClick={() => setCategory("phones")}>
              <img
                src="//cdn.shopify.com/s/files/1/0649/7868/2052/files/img2_b3d2fa04-49cb-49f1-9c06-eab0ecfd9367.jpg?v=1713494483&width=1920"
                alt=""
              />
            </div>
            <div className="item" onClick={() => setCategory("laptops")}>
              <img
                src="//cdn.shopify.com/s/files/1/0649/7868/2052/files/img1_c40f727c-8b81-4a8d-a1ae-a1dccb5d33b1.jpg?v=1712897216&width=1920"
                alt=""
              />
            </div>
            <div className="item" onClick={() => setCategory("watches")}>
              <img
                src="//cdn.shopify.com/s/files/1/0649/7868/2052/files/img-1_6c690fda-3f8d-4d21-8df8-da1ce1966f77.jpg?v=1712892211&width=1920"
                alt=""
              />
            </div>
            <div className="item" onClick={() => setCategory("headphones")}>
              <img
                src="//cdn.shopify.com/s/files/1/0649/7868/2052/files/img1_7eddaad2-c74f-4c5b-a690-e5c0d1595da6.jpg?v=1712891954&width=1920"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="categoryContainer">
          {/* <div className="sideBar">
            <SideBar />
          </div> */}
          <div className="mainContainer">
            <div className="top">
              <label htmlFor="Featured">Featured</label>
              <select id="Featured" onChange={(e) => setSort(e.target.value)}>
                <option value={10}>Best selling</option>
                <option value={"title"}>Alphabetically, A-Z</option>
                <option value={"-title"}>Alphabetically, Z-A</option>
                <option value={"price"}> Price, low to high </option>
                <option value={"-price"}>Price, high to low</option>
                <option value={"createdAt"}> Date, old to new</option>
                <option value={"-createdAt"}>Date, new to old</option>
              </select>
            </div>
            <div className="products">
              {data &&
                data.map((item) => {
                  return <Product item={item} key={item._id} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
