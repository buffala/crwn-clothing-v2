import "./category-item-styles.scss";

const categoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default categoryItem;
