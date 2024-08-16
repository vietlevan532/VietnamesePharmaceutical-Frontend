import './PrivacyPage.css';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import AccountSettingComponent from '../Component/AccountSetting/AccountSettingComponent';

function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="privacy">
        <div className="privacy-container">
          <AccountSettingComponent pageName="privacy" />
          <div className="privacy-content">
            <div className="privacy-top">
              <div className="privacy-title">
                <h2>Privacy Setting</h2>
              </div>
            </div>
            <div className="privacy-body">
              <div className="privacy-action">
                <div className="privacy-action-name">
                  <p>Yêu cầu xóa tài khoản</p>
                </div>
                <div className="privacy-action-btn">
                  <button type="button">Xóa bỏ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPage;
