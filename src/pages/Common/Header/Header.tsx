import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-site-name">
        <span className="p">Pharmaceutical.vn</span>
      </div>
      <div className="header-right">
        <button className="login-btn" type="button">
          ĐĂNG NHẬP
        </button>
        <button className="signup-btn" type="button">
          ĐĂNG KÝ
        </button>
      </div>
    </div>
  );
}

export default Header;
