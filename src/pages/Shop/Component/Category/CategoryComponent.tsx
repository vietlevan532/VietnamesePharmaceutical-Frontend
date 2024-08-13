// import './CategoryComponent.css';
import './CategoryComponent.css';

interface Category {
  id: number;
  name: string;
  image: string;
}

function CategoryComponent({ id, name, image }: Category) {
  return (
    <div key={id} className="category-card">
      <div className="image">
        <img src={image} alt={name} className="category-img" />
      </div>
      <div className="category-card-content">
        <h3 className="category-name">{name}</h3>
      </div>
    </div>
  );
}

export default CategoryComponent;
