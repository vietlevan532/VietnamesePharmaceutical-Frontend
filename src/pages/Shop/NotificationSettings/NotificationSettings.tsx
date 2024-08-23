import { useState } from 'react';
import './NotificationSettings.css';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import AccountSettingComponent from '../Component/AccountSetting/AccountSettingComponent';

function NotificationSettings() {
  const [isEmailNotifyChecked, setIsEmailNotifyChecked] = useState(true);
  const [isSMSNotifyChecked, setIsSMSNotifyChecked] = useState(true);

  const handleEmailToggleChange = () => {
    setIsEmailNotifyChecked(!isEmailNotifyChecked);
  };

  const handleSMSNotifyChecked = () => {
    setIsSMSNotifyChecked(!isSMSNotifyChecked);
  };

  return (
    <>
      <Header />
      <div className="notification-settings">
        <div className="notification-setting-container">
          <AccountSettingComponent
            pageName="my-account"
            itemName="notification"
          />
          <div className="notification-setting-content">
            <div className="email-notification">
              <ul className="email-options">
                <div className="title-options">
                  <div className="notify-title">
                    <h3>Thông báo Email</h3>
                    <span>
                      Thông báo và nhắc nhở quan trọng về tài khoản sẽ không thể
                      bị tắt
                    </span>
                  </div>
                  <div className="notify-option-toggle">
                    <input
                      type="checkbox"
                      id="toggleEmailNotify"
                      checked={isEmailNotifyChecked}
                      onChange={handleEmailToggleChange}
                    />
                    <label
                      htmlFor="toggleEmailNotify"
                      className="switch-toggle"
                    >
                      {' '}
                    </label>
                  </div>
                </div>
                {isEmailNotifyChecked && (
                  <>
                    <li className="setting-option">
                      <div className="setting-option-content">
                        <div className="notify-option-title">
                          <h3>Cập nhật đơn hàng</h3>
                          <span>
                            Cập nhật về tình trạng vận chuyển của tất cả các đơn
                            hàng
                          </span>
                        </div>
                        <div className="notify-option-toggle">
                          <input type="checkbox" id="toggleUpdateOrder" />
                          <label
                            htmlFor="toggleUpdateOrder"
                            className="switch-toggle"
                          >
                            {' '}
                          </label>
                        </div>
                      </div>
                    </li>
                    <li className="setting-option">
                      <div className="setting-option-content">
                        <div className="notify-option-title">
                          <h3>Khuyến mãi</h3>
                          <span>
                            Cập nhật về các ưu đãi và khuyến mãi sắp tới
                          </span>
                        </div>
                        <div className="notify-option-toggle">
                          <input type="checkbox" id="toggleEmailDiscount" />
                          <label
                            htmlFor="toggleEmailDiscount"
                            className="switch-toggle"
                          >
                            {' '}
                          </label>
                        </div>
                      </div>
                    </li>
                    <li className="setting-option">
                      <div className="setting-option-content">
                        <div className="notify-option-title">
                          <h3>Khảo sát</h3>
                          <span>
                            Đồng ý nhận khảo sát để chúng tôi được lắng nghe bạn
                          </span>
                        </div>
                        <div className="notify-option-toggle">
                          <input type="checkbox" id="toggleEmailSurvey" />
                          <label
                            htmlFor="toggleEmailSurvey"
                            className="switch-toggle"
                          >
                            {' '}
                          </label>
                        </div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="sms-notification">
              <ul className="sms-options">
                <div className="title-options">
                  <div className="notify-title">
                    <h3>Thông báo SMS</h3>
                    <span>
                      Thông báo và nhắc nhở quan trọng về tài khoản sẽ không thể
                      bị tắt
                    </span>
                  </div>
                  <div className="notify-option-toggle">
                    <input
                      type="checkbox"
                      id="toggleSmsNotify"
                      checked={isSMSNotifyChecked}
                      onChange={handleSMSNotifyChecked}
                    />
                    <label className="switch-toggle" htmlFor="toggleSmsNotify">
                      {' '}
                    </label>
                  </div>
                </div>
                {isSMSNotifyChecked && (
                  <li className="setting-option">
                    <div className="setting-option-content">
                      <div className="notify-option-title">
                        <h3>Khuyến mãi</h3>
                        <span>
                          Cập nhật về các ưu đãi và khuyến mãi sắp tới
                        </span>
                      </div>
                      <div className="notify-option-toggle">
                        <input type="checkbox" id="toggleSmsDiscount" />
                        <label
                          htmlFor="toggleSmsDiscount"
                          className="switch-toggle"
                        >
                          {' '}
                        </label>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotificationSettings;
