import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.scss";

import laptop from "../../../public/laptop.webp"
import headphone from "../../../public/headphone.webp"
import banner from "../../../public/banner.webp";

const data = [
  {
    id: 1,
    img: laptop,
    title: "Laptops",
    offers: "save up to 50%",
  },
  {
    id: 2,
    img: headphone,
    title: "Headphone",
    offers: "best seller 2024",
  },
  {
    id: 3,
    img: banner,
    title: "Earpods",
    offers: "free shipping all"
  },
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="wrapperCategories">
        {data.map((item) => {
          return <CategoryCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
