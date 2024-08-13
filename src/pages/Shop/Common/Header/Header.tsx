import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronDown,
  faCartShopping,
  faBell,
  faGlobe,
  faCircleQuestion,
  faCircleNodes,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="left">
            <ul className="top-left-content">
              <li className="li-top-content">
                <Link className="top-link" to="/">
                  Kênh chia sẻ
                </Link>
              </li>
              <li className="li-top-content">|</li>
              <li className="li-top-content">
                <Link className="top-link" to="/">
                  Kênh người bán
                </Link>
              </li>
              <li className="li-top-content">|</li>
              <li className="li-top-content">
                <Link className="top-link" to="/">
                  Tải ứng dụng
                </Link>
              </li>
              <li className="li-top-content">|</li>
              <li className="li-top-content">
                <Link className="top-link" to="/">
                  Kết nối
                  <span>
                    <FontAwesomeIcon icon={faCircleNodes} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="top-right-content">
              <li className="li-top-content">
                <Link className="top-link" to="/">
                  <span>
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                  Thông Báo
                </Link>
              </li>
              <li className="li-top-content">
                <Link className="top-link" to="/">
                  <span>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </span>
                  Hỗ Trợ
                </Link>
              </li>
              <li className="li-top-content language">
                <Link className="top-link" to="/">
                  <span>
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  Tiếng Việt
                  <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </Link>
              </li>
              <li className="li-top-content">
                <Link to="/login" className="top-link">
                  Đăng Ký
                </Link>
                <span>|</span>
                <Link to="/signup" className="top-link">
                  Đăng Nhập
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-content">
          <div className="header-logo">
            <a href="/">
              <span>.pharmacy</span>
              VN
            </a>
          </div>
          <div className="header-search">
            <input
              id="input-search"
              type="search"
              placeholder="Pharmacy.VN bao ship 0Đ - Đăng ký ngay!"
            />
            <FontAwesomeIcon id="search-icon" icon={faSearch} />
          </div>
          <div className="header-cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
        <div className="header-categories">
          <div className="left" />
          <div className="mid">
            <ul className="categories-name">
              <li className="category-name">
                <Link className="category-link" to="/">
                  Thực Phẩm Chức Năng
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Thuốc Kê Đơn
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Khẩu Trang
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Nước Xúc Miệng
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Dầu Gió
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Cốm Cho Trẻ
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Nước Muối
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Collagen
                </Link>
              </li>
              <li className="category-name">
                <Link className="category-link" to="/">
                  Hàng Ngoại
                </Link>
              </li>
            </ul>
          </div>
          <div className="right" />
        </div>
      </div>
    </div>
  );
}

export default Header;
