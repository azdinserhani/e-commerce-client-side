import "./Deal.scss";

const Deal = () => {
  return (
    <div className="deal">
      <div className="wrapper">
        <div className="left">
          <p>Weekend Deal</p>
          <h2>Best Color Watch <br /> Deals Right Now</h2>
          <span>Amazing dicounts and deals</span>
          <button>shop now</button>
        </div>
        <div className="right">
          <img
            src="https://www.belmasry.news/UploadCache/libfiles/1/7/600x338o/961.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Deal;
