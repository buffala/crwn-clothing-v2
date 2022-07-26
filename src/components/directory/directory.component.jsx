import CategoryItem from "../catetory-item/category-item.component";

import "./directory.component.scss";

const directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default directory;
