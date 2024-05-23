import './LoginPage.css';
import { Link } from 'react-router-dom';
import Header from '../Common/Header/Header';

function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <div className="login-form">
        <div className="left">
          <img
            src="/pharmaceutical_logo_design.png"
            alt="Pharmaceutical Logo"
            id="logo"
          />
        </div>
        <div className="right">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h2 id="title">ĐĂNG NHẬP</h2>
              </div>
              <form action="">
                <div className="login-input">
                  <input type="text" placeholder="Email hoặc số điện thoại" />
                  <input type="password" placeholder="Mật khẩu" />
                </div>
                <Link id="forgot-password" to="/">
                  Quên mật khẩu?
                </Link>
                <button id="login-btn" type="submit">
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
