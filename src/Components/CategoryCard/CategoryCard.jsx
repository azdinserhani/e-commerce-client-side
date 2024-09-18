import "./CategoryCard.scss";

const CategoryCard = ({ item }) => {
  return (
    <div className="categoryCard">
      <img src={item.img} alt="" />
      <div className="info">
        <span>{item.offers}</span>
        <p>{item.title}</p>
        <button>shop now</button>
      </div>
    </div>
  );
};

export default CategoryCard;
