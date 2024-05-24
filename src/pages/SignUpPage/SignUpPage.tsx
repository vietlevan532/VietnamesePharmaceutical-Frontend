import './SignUpPage.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from '../Common/Header/Header';

function SignUpPage() {
  const [birthDate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (e: any) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (value.length > 5) {
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }
    setBirthdate(value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGenderChange = (e: any) => {
    setGender(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-page">
      <Header />
      <div className="signup-form">
        <div className="left">
          <img
            src="/pharmaceutical_logo_design.png"
            alt="Pharmaceutical Logo"
            id="logo"
          />
        </div>
        <div className="right">
          <div className="form">
            <div className="signup">
              <div className="signup-header">
                <h2 id="signup-title">ĐĂNG KÝ</h2>
              </div>
              <form action="">
                <div className="signup">
                  <div className="fullname">
                    <input
                      type="text"
                      className="signup-input input-right"
                      placeholder="Họ"
                    />
                    <input
                      type="text"
                      className="signup-input input-left"
                      placeholder="Tên"
                    />
                  </div>
                  <div className="date-gender">
                    <input
                      type="text"
                      className="signup-input input-right"
                      placeholder="Ngày sinh: dd/mm/yyyy"
                      value={birthDate}
                      onChange={handleDateChange}
                      maxLength={10}
                    />
                    <select
                      id="gender"
                      className="signup-input input-left"
                      value={gender}
                      onChange={handleGenderChange}
                    >
                      <option className="gender-option" value="" defaultChecked>
                        Giới tính
                      </option>
                      <option className="gender-option" value="male">
                        Nam
                      </option>
                      <option className="gender-option" value="female">
                        Nữ
                      </option>
                      <option className="gender-option" value="other">
                        Khác
                      </option>
                    </select>
                  </div>
                  <div className="email-phone">
                    <input
                      type="text"
                      className="signup-input input-right"
                      placeholder="Email "
                    />
                    <input
                      type="text"
                      className="signup-input input-left"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div className="password">
                    <div className="signup-password-container">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="signup-input input-right"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mật khẩu"
                      />
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        id="signup-password-icon"
                        onClick={toggleShowPassword}
                      />
                    </div>
                    <div className="signup-confirmPassword-container">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Xác nhận mật khẩu"
                        className="signup-input input-left"
                      />
                      <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                        id="signup-confirmPassword-icon"
                        onClick={toggleShowConfirmPassword}
                      />
                    </div>
                  </div>
                  <div className="certificate-number">
                    <input
                      type="text"
                      className="signup-input"
                      placeholder="Số chứng chỉ"
                    />
                  </div>
                </div>
                <div className="agree-condition">
                  <input type="checkbox" id="agree-checkbox" />
                  <label htmlFor="agree-checkbox">
                    Bạn đã chắc chắn rằng những thông tin trên là chính xác!
                  </label>
                </div>
                <button id="signup-btn" type="submit">
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
