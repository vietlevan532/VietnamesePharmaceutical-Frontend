import './AddressPage.css';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import AccountSettingComponent from '../Component/AccountSetting/AccountSettingComponent';

function AddressPage() {
  return (
    <>
      <Header />
      <div className="address">
        <div className="address-container">
          <AccountSettingComponent pageName="address" />
          <div className="address-content">
            <div className="address-top">
              <div className="address-title">
                <h2>Địa Chỉ Của Tôi</h2>
              </div>
              <div className="add-address-btn">
                <button type="button">
                  <FaPlus id="plusIcon-inAddress" /> Thêm địa chỉ mới
                </button>
              </div>
            </div>
            <div className="address-body">
              <div className="content-name">
                <h2>Địa Chỉ</h2>
              </div>
              <div className="address-list-content">
                <ul className="address-list">
                  <li className="default-detail-address">
                    <div className="detail-address-left">
                      <div className="contact">
                        <div className="nick-name">Lê Văn Việt</div>
                        <div className="">|</div>
                        <div className="phone">0986710164</div>
                      </div>
                      <div className="address-name">
                        <p>Nhà thuốc Việt Tiến, Hẻm Số 51, Phạm Văn Chiêu</p>
                        <p>Phường 14, Quận Gò Vấp, TP. Hồ Chí Minh</p>
                      </div>
                      <div className="address-roles">
                        <p id="default-address">Mặc định</p>
                      </div>
                    </div>
                    <div className="detail-address-right">
                      <div className="address-action">
                        <Link to="/">Cập nhật</Link>
                      </div>
                      <div className="set-default-btn">
                        <button type="button" disabled>
                          Thiết lập mặc định
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="detail-address">
                    <div className="detail-address-left">
                      <div className="contact">
                        <div className="nick-name">Lê Văn Việt</div>
                        <div className="">|</div>
                        <div className="phone">0986710164</div>
                      </div>
                      <div className="address-name">
                        <p>Nhà thuốc Việt Tiến, Hẻm Số 51, Phạm Văn Chiêu</p>
                        <p>Phường 14, Quận Gò Vấp, TP. Hồ Chí Minh</p>
                      </div>
                      <div className="address-roles">
                        <div className="address-roles">
                          <p id="delivery-address">Địa chỉ lấy hàng</p>
                          <p id="delivery-address">Địa chỉ nhận hàng</p>
                        </div>
                      </div>
                    </div>
                    <div className="detail-address-right">
                      <div className="address-action">
                        <Link to="/">Cập nhật</Link>
                        <Link to="/">Xóa</Link>
                      </div>
                      <div className="set-default-btn">
                        <button type="button">Thiết lập mặc định</button>
                      </div>
                    </div>
                  </li>
                  <li className="detail-address">
                    <div className="detail-address-left">
                      <div className="contact">
                        <div className="nick-name">Lê Văn Việt</div>
                        <div className="">|</div>
                        <div className="phone">0986710164</div>
                      </div>
                      <div className="address-name">
                        <p>Nhà thuốc Việt Tiến, Hẻm Số 51, Phạm Văn Chiêu</p>
                        <p>Phường 14, Quận Gò Vấp, TP. Hồ Chí Minh</p>
                      </div>
                      <div className="address-roles" />
                    </div>
                    <div className="detail-address-right">
                      <div className="address-action">
                        <Link to="/">Cập nhật</Link>
                        <Link to="/">Xóa</Link>
                      </div>
                      <div className="set-default-btn">
                        <button type="button">Thiết lập mặc định</button>
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

export default AddressPage;
