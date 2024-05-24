import './LoginPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from '../Common/Header/Header';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
                  <div className="password-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mật khẩu"
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      id="password-icon"
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div>
                <div className="password-active">
                  <div className="save-password">
                    <input type="checkbox" id="remember-password" />
                    <label htmlFor="remember-password">Lưu mật khẩu</label>
                  </div>
                  <div className="forgot-password">
                    <Link id="forgot-password" to="/">
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>
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
