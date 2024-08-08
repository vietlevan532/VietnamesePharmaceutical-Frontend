import './SignUpPage.css';
import { useState } from 'react';
import HeaderAuth from '../Common/HeaderAuth/HeaderAuth';

function SignUpPage() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [1, 2, 3];

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const getStepDescription = (step: number) => {
    switch (step) {
      case 1:
        return '25 mục để hoàn thành';
      case 2:
        return '30 mục để hoàn thành';
      case 3:
        return '35 mục để hoàn thành';
      default:
        return '';
    }
  };

  return (
    <>
      <HeaderAuth title="Đăng ký" path="/#/login" change_form="Đăng nhập" />
      <div className="container-register">
        <div className="form-box">
          <div className="progress">
            <div className="logo">
              <a
                href="/"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  color: '#555',
                }}
              >
                <span>.pharmacy</span>
                VN
              </a>
            </div>
            <ul className="progress-steps">
              {steps.map((step) => (
                <li
                  key={step}
                  className={`step ${activeStep === step ? 'active' : ''}`}
                >
                  <span>{step}</span>
                  <p>
                    {step === 1 && 'Thông tin'}
                    {step === 2 && 'Liên hệ'}
                    {step === 3 && 'Tài khoản'}
                    <br />
                    <span>{getStepDescription(step)}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <form action="/cds" id="register-form">
            <div
              className={`form-one form-step ${activeStep === 1 ? 'active' : ''}`}
            >
              <div className="bg-svg" />
              <h2>Thông tin cá nhân</h2>
              <br />
              <div>
                <label htmlFor="#">Họ</label>
                <input type="text" placeholder="e.g. Paul" />
              </div>
              <div>
                <label htmlFor="#">Tên</label>
                <input type="text" placeholder="e.g. John" />
              </div>
              <div className="birth">
                <label htmlFor="#">Ngày sinh</label>
                <div className="grouping">
                  <input
                    type="text"
                    pattern="[0-9]*"
                    name="day"
                    value=""
                    min={0}
                    max={31}
                    placeholder="dd"
                  />
                  <input
                    type="text"
                    pattern="[0-9]*"
                    name="month"
                    value=""
                    min={0}
                    max={12}
                    placeholder="mm"
                  />
                  <input
                    type="text"
                    pattern="[0-9]*"
                    name="year"
                    value=""
                    min={0}
                    max={2100}
                    placeholder="yyyy"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="gender">Giới tính</label>
                <select name="gender" id="gender">
                  <option value="gender">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>
            <div
              className={`form-two form-step ${activeStep === 2 ? 'active' : ''}`}
            >
              <div className="bg-svg" />
              <h2>Thông tin liên hệ</h2>
              <br />
              <div>
                <label htmlFor="#">Số điện thoại</label>
                <input type="tel" placeholder="+84 xxxxxxxxx" />
              </div>
              <div>
                <label htmlFor="#">Địa chỉ</label>
                <input type="text" placeholder="Tên đường" />
              </div>
              <div>
                <input type="text" placeholder="Văn phòng/Tòa nhà/Số nhà/Hẻm" />
              </div>
              <div>
                <label htmlFor="#">Tỉnh/Thành phố</label>
                <input type="text" placeholder="Tên tỉnh/thành phố" />
              </div>
              <div>
                <label htmlFor="country">Quốc gia</label>
                <select name="country" id="country">
                  <option value="country">Vui lòng chọn quốc gia</option>
                  <option value="Vietnamese">Viet Nam</option>
                  <option value="Chinese">China</option>
                  <option value="Singapore">Singapore</option>
                </select>
              </div>
            </div>
            <div
              className={`form-three form-step ${activeStep === 3 ? 'active' : ''}`}
            >
              <div className="bg-svg" />
              <h2>Thông tin tài khoản</h2>
              <br />
              <div>
                <label htmlFor="gender">Bạn là?</label>
                <select name="gender" id="gender">
                  <option value="">Vui lòng chọn</option>
                  <option value="quay_thuoc">Quầy thuốc</option>
                  <option value="nha_thuoc">Nhà thuốc</option>
                  <option value="phong_kham">Phòng khám</option>
                  <option value="benh_vien">Bệnh viện</option>
                  <option value="cong_ty_duoc_pham">Công ty dược phẩm</option>
                  <option value="nha_khoa">Nha khoa</option>
                  <option value="tham_my_vien">Thẩm mỹ viện</option>
                  <option value="trung_tam_y_te">Trung tâm y tế</option>
                  <option value="duoc_si">Dược sĩ</option>
                  <option value="trinh_duoc_vien">Trình dược viên</option>
                  <option value="benh_nhan">Bệnh nhân</option>
                </select>
              </div>
              <div>
                <label htmlFor="#">Email</label>
                <input type="email" placeholder="e.g. example@gmail.com" />
              </div>
              <div>
                <label htmlFor="#">Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />
              </div>
              <div>
                <label htmlFor="#">Xác nhận mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu xác minh" />
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn-prev"
                id="btn-prev"
                onClick={handlePrev}
                disabled={activeStep === 1}
                style={{ userSelect: 'none' }}
              >
                Quay lại
              </button>
              <button
                type="button"
                className="btn-next"
                onClick={handleNext}
                disabled={activeStep === steps.length}
                style={{ userSelect: 'none' }}
              >
                Tiếp tục
              </button>
              <button
                type="button"
                className="btn-submit"
                disabled={activeStep !== steps.length}
                style={{ userSelect: 'none' }}
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
