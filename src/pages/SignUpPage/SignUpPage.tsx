import './SignUpPage.css';
import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header/Header';

interface Errors {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  position?: string;
  gender?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  certificateNumber?: string;
  agreeCondition?: string;
}

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthdate] = useState('');
  const [position, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [certificateNumber, setCertificateNumber] = useState('');
  const [agreeCondition, setAgreeCondition] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmitSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!lastName) newErrors.lastName = 'Họ là bắt buộc *';
    if (!firstName) newErrors.firstName = 'Tên là bắt buộc *';
    if (!birthDate) newErrors.birthDate = 'Nhập ngày sinh đầy đủ *';
    if (!position) newErrors.position = 'Bạn là?';
    if (!gender) newErrors.gender = 'Chọn giới tính *';
    if (!email) newErrors.email = 'Nhập email *';
    if (!phoneNumber) newErrors.phoneNumber = 'Nhập số điện thoại *';
    if (!password) newErrors.password = 'Nhập mật khẩu *';
    if (!confirmPassword || confirmPassword !== password)
      newErrors.confirmPassword = 'Nhập lại mật khẩu *';
    if (!certificateNumber) newErrors.certificateNumber = 'Nhập số giấy phép *';
    if (!agreeCondition)
      newErrors.agreeCondition =
        'Bạn cần chắc chắn rằng những thông tin trên là đúng!';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate('/login');
    }
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
              <form onSubmit={handleSubmitSignup}>
                <div className="signup">
                  <div className="fullname">
                    <input
                      type="text"
                      className={`signup-input input-right ${errors.lastName ? 'signup-input-error' : ''}`}
                      value={lastName}
                      placeholder={errors.lastName || 'Họ *'}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                      type="text"
                      className={`signup-input input-left ${errors.firstName ? 'signup-input-error' : ''}`}
                      value={firstName}
                      placeholder={errors.firstName || 'Tên *'}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="role-gender">
                    <select
                      id="role"
                      className={`signup-input input-right ${errors.position ? 'signup-input-error' : ''}`}
                      value={position}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option className="role-option" value="" defaultChecked>
                        Bạn là... *
                      </option>
                      <option className="role-option" value="quay_thuoc">
                        Quầy thuốc
                      </option>
                      <option className="role-option" value="nha_thuoc">
                        Nhà thuốc
                      </option>
                      <option className="role-option" value="phong_kham">
                        Phòng khám
                      </option>
                      <option className="role-option" value="benh_vien">
                        Bệnh viện
                      </option>
                      <option className="role-option" value="cong_ty_duoc_pham">
                        Công ty dược phẩm
                      </option>
                      <option className="role-option" value="nha_khoa">
                        Nha khoa
                      </option>
                      <option className="role-option" value="tham_my_vien">
                        Thẩm mỹ viện
                      </option>
                      <option className="role-option" value="trung_tam_y_te">
                        Trung tâm y tế
                      </option>
                      <option className="role-option" value="duoc_si">
                        Dược sĩ
                      </option>
                      <option className="role-option" value="trinh_duoc_vien">
                        Trình dược viên
                      </option>
                      <option className="role-option" value="benh_nhan">
                        Bệnh nhân
                      </option>
                    </select>
                    <select
                      id="gender"
                      className={`signup-input input-left ${errors.gender ? 'signup-input-error' : ''}`}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option className="gender-option" value="" defaultChecked>
                        Giới tính *
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
                      type="email"
                      className={`signup-input input-right ${errors.email ? 'signup-input-error' : ''}`}
                      value={email}
                      placeholder={errors.email || 'Email *'}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="tel"
                      className={`signup-input input-left ${errors.phoneNumber ? 'signup-input-error' : ''}`}
                      placeholder={errors.phoneNumber || 'Số điện thoại *'}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="password">
                    <div className="signup-password-container">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className={`signup-input input-right ${errors.password ? 'signup-input-error' : ''}`}
                        value={password}
                        placeholder={errors.password || 'Mật khẩu *'}
                        onChange={(e) => setPassword(e.target.value)}
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
                        className={`signup-input input-left ${errors.confirmPassword ? 'signup-input-error' : ''}`}
                        value={confirmPassword}
                        placeholder={
                          errors.confirmPassword || 'Xác nhận mật khẩu *'
                        }
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                        id="signup-confirmPassword-icon"
                        onClick={toggleShowConfirmPassword}
                      />
                    </div>
                  </div>
                  <div className="date-certificate">
                    <input
                      type="text"
                      className={`signup-input input-right ${errors.birthDate ? 'signup-input-error' : ''}`}
                      value={birthDate}
                      placeholder={
                        errors.birthDate || 'Ngày sinh: dd/mm/yyyy *'
                      }
                      onChange={handleDateChange}
                      maxLength={10}
                    />
                    <input
                      type="text"
                      className={`signup-input input-left ${errors.certificateNumber ? 'signup-input-error' : ''}`}
                      placeholder={errors.certificateNumber || 'Số chứng chỉ *'}
                      onChange={(e) => setCertificateNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="agree-condition">
                  <input
                    type="checkbox"
                    id="agree-checkbox"
                    checked={agreeCondition}
                    onChange={(e) => setAgreeCondition(e.target.checked)}
                  />
                  {errors.agreeCondition ? (
                    <label
                      htmlFor="agree-checkbox"
                      id="label-agree-checkbox-error"
                    >
                      {errors.agreeCondition}
                    </label>
                  ) : (
                    <label htmlFor="agree-checkbox" id="label-agree-checkbox">
                      Bạn đã chắc chắn rằng những thông tin trên là chính xác!
                    </label>
                  )}
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
