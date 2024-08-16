import './PaymentPage.css';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import AccountSettingComponent from '../Component/AccountSetting/AccountSettingComponent';

function PaymentPage() {
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment-container">
          <AccountSettingComponent pageName="payment" />
          <div className="payment-content">
            <div className="payment-top">
              <div className="payment-title">
                <h2>Thẻ Tín Dụng/Ghi Nợ</h2>
              </div>
              <div className="add-payment-btn">
                <button type="button">
                  <FaPlus id="plusIcon-inPayment" /> Thêm Thẻ Mới
                </button>
              </div>
            </div>
            <div className="payment-body">
              <div className="payment-list-content">
                <ul className="payment-list">
                  <li className="default-detail-payment">
                    <div className="detail-payment-left">
                      <div className="contact">
                        <div className="nick-name">Vietcombank</div>
                        <div>|</div>
                        <div className="account-owner">Lê Văn Việt</div>
                      </div>
                      <div className="payment-name">
                        <p>Số thẻ: 7897437688234</p>
                        <p>Ngày liên kết: 08/03/2024</p>
                      </div>
                      <div className="payment-roles">
                        <p id="default-payment">Mặc định</p>
                      </div>
                    </div>
                    <div className="detail-payment-right">
                      <div className="payment-action">
                        <Link to="/">Xóa</Link>
                      </div>
                      <div className="set-default-btn">
                        <button type="button" disabled>
                          Thiết lập mặc định
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment-top">
              <div className="payment-title">
                <h2>Tài Khoản Ngân Hàng Của Tôi</h2>
              </div>
              <div className="add-payment-btn">
                <button type="button">
                  <FaPlus id="plusIcon-inPayment" /> Thêm Tài Khoản Ngân Hàng
                  Liên Kết
                </button>
              </div>
            </div>
            <div className="payment-body">
              <div className="payment-list-content">
                <ul className="payment-list">
                  <li className="default-detail-payment">
                    <div className="detail-payment-left">
                      <div className="contact">
                        <div className="nick-name">Vietcombank</div>
                        <div>|</div>
                        <div className="account-owner">Lê Văn Việt</div>
                      </div>
                      <div className="payment-name">
                        <p>Số thẻ: 7897437688234</p>
                        <p>Ngày liên kết: 08/03/2024</p>
                      </div>
                      <div className="payment-roles">
                        <p id="default-payment">Mặc định</p>
                      </div>
                    </div>
                    <div className="detail-payment-right">
                      <div className="payment-action">
                        <Link to="/">Xóa</Link>
                      </div>
                      <div className="set-default-btn">
                        <button type="button" disabled>
                          Thiết lập mặc định
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
