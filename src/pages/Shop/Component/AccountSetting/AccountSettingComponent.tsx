import './AccountSettingComponent.css';
import { Link } from 'react-router-dom';
import { FaPen, FaUser, FaBell, FaCoins, FaNotesMedical } from 'react-icons/fa';
import { FaTicket } from 'react-icons/fa6';

interface AccountSettingProps {
  pageName: string;
}

function AccountSettingComponent({ pageName }: AccountSettingProps) {
  return (
    <div className="account-setting">
      <div className="account">
        <div className="account-img">
          <img src="vite.svg" alt="" />
        </div>
        <div className="account-name">
          <h3>Account name</h3>
          <Link to="/">
            <FaPen id="faPen" />
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className="option">
        <ul className="options">
          <li className="option">
            <Link to="/profile">
              <FaUser id="faUser" className="account-icon" />
              Tài Khoản Của Tôi
            </Link>
            <ul className="sub-option-list">
              <li
                className={
                  pageName.toUpperCase() === 'PROFILE'
                    ? 'sub-option active'
                    : 'sub-option'
                }
              >
                <Link to="/user/account/profile">Hồ Sơ</Link>
              </li>
              <li
                className={
                  pageName.toUpperCase() === 'PAYMENT'
                    ? 'sub-option active'
                    : 'sub-option'
                }
              >
                <Link to="/user/account/payment">Ngân Hàng</Link>
              </li>
              <li
                className={
                  pageName.toUpperCase() === 'ADDRESS'
                    ? 'sub-option active'
                    : 'sub-option'
                }
              >
                <Link to="/user/account/address">Địa chỉ</Link>
              </li>
              <li 
                className={
                  pageName.toUpperCase() === 'CHANGE-PASSWORD'
                    ? 'sub-option active'
                    : 'sub-option'
                }
              >
                <Link to="/user/account/change-password">Đổi mật khẩu</Link>
              </li>
              <li 
                className={
                  pageName.toUpperCase() === 'NOTIFICATION'
                    ? 'sub-option active'
                    : 'sub-option'
                }
              >
                <Link to="/user/setting/notification">Cài đặt thông báo</Link>
              </li>
              <li
                className={
                  pageName.toUpperCase() === 'PRIVACY'
                    ? 'sub-option active'
                    : 'sub-option'
                }
              >
                <Link to="/user/setting/privacy">Những thiết lập riêng tư</Link>
              </li>
            </ul>
          </li>
          <li className="option">
            <Link to="/">
              <FaNotesMedical id="faNoteMedical" className="account-icon" />
              Đơn Mua
            </Link>
          </li>
          <li className="option">
            <Link to="/">
              <FaBell id="faBell" className="account-icon" />
              Thông Báo
            </Link>
            <ul className="sub-option-list">
              <li className="sub-option">
                <Link to="/">Cập Nhật Đơn Hàng</Link>
              </li>
              <li className="sub-option">
                <Link to="/">Khuyến Mãi</Link>
              </li>
              <li className="sub-option">
                <Link to="/">Cập Nhật Ví</Link>
              </li>
              <li className="sub-option">
                <Link to="/">Cập Nhật Pharmacy</Link>
              </li>
            </ul>
          </li>
          <li className="option">
            <Link to="/">
              <FaTicket id="faTicket" className="account-icon" />
              Kho Voucher
            </Link>
          </li>

          <li className="option">
            <Link to="/">
              <FaCoins id="faCoins" className="account-icon" />
              Pharmacy Point
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountSettingComponent;
