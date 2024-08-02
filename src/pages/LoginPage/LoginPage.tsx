import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../Common/Header/Header';

interface Errors {
  login?: string;
  password?: string;
  rememberMe?: boolean;
}

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const parent = e.target.parentNode!.parentNode as HTMLElement;
    parent.classList.add('focus');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const parent = e.target.parentNode!.parentNode as HTMLElement;
    if (e.target.value === '') {
      parent.classList.remove('focus');
    }
  };

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!login) {
      newErrors.login = 'Vui lòng nhập thông tin *';
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
    <>
      <Header />
      <img src="wave.png" alt="wave.png" className="wave" />
      <div className="container">
        <div className="img">
          <img src="bg.svg" alt="Background Logo" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmitLogin}>
            <img src="pharmaceutical_logo_design.png" alt="Avatar logo" />
            <h2 className="title">Xin chào!</h2>
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faUser} style={{ transition: '.3s' }} />
              </div>
              <div className="div">
                <h5
                  style={{
                    color: errors.login ? 'red' : '',
                  }}
                >
                  {errors.login || 'Email/Số điện thoại/Tên tài khoản'}
                </h5>
                <input
                  type="text"
                  className="input"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} style={{ transition: '.3s' }} />
              </div>
              <div className="div">
                <h5
                  style={{
                    color: errors.login ? 'red' : '',
                  }}
                >
                  {errors.password || 'Mật khẩu'}
                </h5>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="i-right">
                <FontAwesomeIcon
                  id="showPassword"
                  icon={showPassword ? faEye : faEyeSlash}
                  style={{ transition: '.3s' }}
                  onClick={toggleShowPassword}
                />
              </div>
            </div>

            <button type="submit" className="btn">
              Đăng Nhập
            </button>
            <div className="remember-me-container">
              <div className="remember-me-checkbox">
                <input
                  type="checkbox"
                  className="rememberMe"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label id="rememberMe-text" htmlFor="rememberMe">
                  Nhớ tôi!
                </label>
              </div>
              <Link id="forgot-password" to="/">
                Quên mật khẩu?
              </Link>
            </div>
            <div className="other">
              <div>
                <hr style={{ color: '#999' }} />
              </div>
              <span
                style={{
                  marginTop: '-8px',
                  fontSize: '14px',
                  fontFamily: 'sans-serif',
                }}
              >
                HOẶC
              </span>
              <div>
                <hr style={{ color: '#999' }} />
              </div>
            </div>
            <div className="other-method-login">
              <div className="btn-other-account">
                <img
                  src="avatar.svg"
                  alt="Google logo"
                  style={{ width: '40px', height: '40px' }}
                />
                <p style={{ marginLeft: '5px' }}>Google</p>
              </div>
              <div className="btn-other-account">
                <img
                  src="avatar.svg"
                  alt="Facebook logo"
                  style={{ width: '40px', height: '40px' }}
                />
                <p style={{ marginLeft: '5px' }}>Facebook</p>
              </div>
            </div>
            <div className="registration-way">
              <p style={{ color: '#999' }}>
                Bạn mới biết đến Pharmaceutical.vn?
              </p>
              <Link
                to="/signup"
                style={{ color: '#32be8f', marginLeft: '5px' }}
              >
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
