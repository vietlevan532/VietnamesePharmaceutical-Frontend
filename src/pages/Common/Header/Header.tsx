import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSingUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="header">
      <div className="header-site-name">
        <span className="p">Pharmaceutical.vn</span>
      </div>
      <div className="header-right">
        <button className="login-btn" type="button" onClick={handleLoginClick}>
          ĐĂNG NHẬP
        </button>
        <button
          className="signup-btn"
          type="button"
          onClick={handleSingUpClick}
        >
          ĐĂNG KÝ
        </button>
      </div>
    </div>
  );
}

export default Header;
