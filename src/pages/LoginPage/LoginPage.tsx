import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from '../Common/Header/Header';

interface Errors {
  emailOrPhoneNumber?: string;
  password?: string;
}

function LoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!emailOrPhoneNumber) {
      newErrors.emailOrPhoneNumber = 'Vui lòng nhập email hoặc số điện thoại *';
    }
    if (!password) {
      newErrors.password = 'Vui lòng nhập mật khẩu *';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate('/signup');
    }
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
              <form onSubmit={handleSubmitLogin}>
                <div className="login-input">
                  <input
                    type="text"
                    className={`signin-input ${errors.emailOrPhoneNumber ? 'signin-input-error' : ''}`}
                    placeholder={
                      errors.emailOrPhoneNumber || 'Email hoặc số điện thoại *'
                    }
                    value={emailOrPhoneNumber}
                    onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
                  />
                  <div className="password-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`signin-input ${errors.password ? 'signin-input-error' : ''}`}
                      placeholder={errors.password || 'Mật khẩu *'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    <label
                      htmlFor="remember-password"
                      id="label-remember-password"
                    >
                      Lưu mật khẩu
                    </label>
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
