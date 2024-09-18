import Product from "../Product/Product";
import "./Products.scss";




const Products = ({ data, title }) => {
  
  return (
    <div className="products">
      <h2>{title }</h2>
      <div className="wrapper">
        {data &&
          data.map((item) => {
            return <Product item={item} key={item.id} />;
          })}
        
      </div>
    </div>
  );
};

export default Products;
