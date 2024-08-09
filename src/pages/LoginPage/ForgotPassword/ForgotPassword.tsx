import './ForgotPassword.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import HeaderAuth from '../../Common/HeaderAuth/HeaderAuth';
import Footer from '../../Common/Footer/Footer';

function ForgotPassword() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');

  const goBackHome = () => {
    navigate('/login');
  };

  const validateInput = (value: string) => {
    if (value.trim() === '') {
      return '';
    }

    // Regex patterns for email and phone number validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,11}$/;

    if (!emailPattern.test(value) && !phonePattern.test(value)) {
      return '*** Email hoặc số điện thoại không hợp lệ!';
    }
    return '';
  };

  useEffect(() => {
    setError(validateInput(login));
  }, [login]);

  return (
    <>
      <HeaderAuth title="Đặt lại mật khẩu" path="" change_form="" />
      <div className="forgot-password">
        <div className="forgot-password-container">
          <form className="login-info-form" action="">
            <div className="form-top">
              <button type="button" onClick={goBackHome}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="form-top-name">Đặt lại mật khẩu</div>
            </div>
            <div className="form-bottom">
              <div className="bottom-element">
                <div className="input-login-infor">
                  <input
                    type="text"
                    placeholder="Email/Số điện thoại"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </div>
                {error && <div className="error-login-infor">{error}</div>}
              </div>
              <div className="bottom-element">
                <button type="submit" disabled={!login || !!error}>
                  tiếp theo
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
