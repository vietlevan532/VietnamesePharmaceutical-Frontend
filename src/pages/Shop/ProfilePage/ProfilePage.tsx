import './ProfilePage.css';
import { Link } from 'react-router-dom';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import AccountSettingComponent from '../Component/AccountSetting/AccountSettingComponent';

function ProfilePage() {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile-container">
          <AccountSettingComponent pageName='my-account' itemName="profile" />
          <div className="profile-content">
            <div className="profile-top">
              <h2>Hồ Sơ Của Tôi</h2>
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className="profile-bottom">
              <div className="profile-bottom-left">
                <ul className="profile-left-content">
                  <li className="left-content">
                    Tên đăng nhập
                    <span className="infor-detail">vietvan22</span>
                  </li>
                  <li className="left-content">
                    Tên
                    <input
                      type="text"
                      value="Le Van Viet"
                      className="infor-detail"
                    />
                  </li>
                  <li className="left-content">
                    Email
                    <span className="infor-detail">
                      vietvan05032002@gmail.com
                    </span>
                    <Link to="/">Thay Đổi</Link>
                  </li>
                  <li className="left-content">
                    Số điện thoại
                    <span className="infor-detail">0986710164</span>
                    <Link to="/">Thay Đổi</Link>
                  </li>
                  <li className="left-content" id="gender">
                    Giới tính
                    <div className="gender-options">
                      <label htmlFor="gender-male">
                        <input
                          type="radio"
                          id="gender-male"
                          name="gender"
                          value="male"
                        />
                        Nam
                      </label>
                      <label htmlFor="gender-female">
                        <input
                          type="radio"
                          id="gender-female"
                          name="gender"
                          value="female"
                        />
                        Nữ
                      </label>
                      <label htmlFor="gender-other">
                        <input
                          type="radio"
                          id="gender-other"
                          name="gender"
                          value="other"
                        />
                        Khác
                      </label>
                    </div>
                  </li>
                  <li className="left-content">
                    Ngày sinh
                    <span className="infor-detail">05/03/2002</span>
                    <Link to="/">Thay Đổi</Link>
                  </li>
                  <li className="left-content" id="save-infor">
                    <button type="button" id="save-button">
                      Lưu
                    </button>
                  </li>
                </ul>
              </div>
              <div className="profile-bottom-right">
                <div className="right-display-img">
                  <img src="vite.svg" alt="Avatar" />
                </div>
                <div className="right-choose-img">
                  <button type="button">Chọn Ảnh</button>
                </div>
                <div className="right-file-limit">
                  <p>Dụng lượng file tối đa 1 MB</p>
                  <p>Định dạng:.JPEG, .PNG</p>
                </div>
              </div>
            </div>
            {/* <div className="save-button">
              <button type="button">Lưu</button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
