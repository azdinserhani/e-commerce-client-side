import Categories from "../../Components/Categories/Categories";
import Hero from "../../Components/Hero/Hero";
import NavBar from "../../Components/NavBar/NavBar";
import Products from "../../Components/Products/Products";
import Services from "../../Components/services/Services";
import "./Home.scss";
import { popularProducts, RecommendedProduct } from "../../../data";
import Deal from "../../Components/Banner/Deal";
import NewsLettre from "../../Components/NewsLettre/NewsLettre";
import { useEffect, useState } from "react";
import { userRequest } from "../../axios";
const Home = () => {
  const [popProducts, setPopProducts] = useState([]);
  const [recProducts, setRecProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const [popProduct, recProducts] = await Promise.all([
          userRequest.get("/api/products?limit=3"),
          userRequest.get("/api/products?limit=6"),
        ]);
        setPopProducts(popProduct.data.data.products);
        setRecProducts(recProducts.data.data.products);
      } catch (error) {
        setErr(err.message || "something was wrong");
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="home">
      <Hero />
      <Services />
      <Categories />
      <Products data={popProducts} title={"Top Selling Products"} />
      <Deal />
      <Products data={recProducts} title={"Recommended For You"} />
      <NewsLettre />
    </div>
  );
};

export default Home;
