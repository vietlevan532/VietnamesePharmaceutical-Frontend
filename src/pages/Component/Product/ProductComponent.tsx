import './ProductComponent.css';
import {
  FaShoppingCart,
  FaRegBookmark,
  FaFireAlt,
  FaStar,
} from 'react-icons/fa';

function ProductComponent({
  id,
  name,
  image,
  price,
  totalSales,
  rating,
  timeLeft,
}: Product) {
  return (
    <div key={id} className="product-card">
      <img src={image} alt={name} className="product-img" />

      <FaShoppingCart className="product-card-cart" />
      <FaRegBookmark className="product-card-wishlist" />
      <FaFireAlt className="product-card-fast-selling" />

      <div className="product-card-content">
        <h3 className="product-name">{name}</h3>
        <div className="display-stack-one">
          <div className="product-rating">
            {[...Array(rating)].map((rate) => (
              <FaStar id={rate + 1} key={rate} />
            ))}
          </div>
          <div className="product-time">{timeLeft} days left</div>
        </div>
        <div className="display-stack-two">
          <div className="product-price">₫{price}</div>
          <div className="product-sales">Đã bán {totalSales}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
