import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-overall">
          <div className="overall-top">
            <div className="ul">
              <ul className="items">
                <span>chăm sóc khách hàng</span>
                <li className="item">
                  <Link to="/">Trung tâm trợ giúp</Link>
                </li>
                <li className="item">
                  <Link to="/">Pharmacy.Vn Blog</Link>
                </li>
                <li className="item">
                  <Link to="/">Pharmacy.Vn Mall</Link>
                </li>
                <li className="item">
                  <Link to="/">Hướng dẫn mua hàng</Link>
                </li>
                <li className="item">
                  <Link to="/">Hướng dẫn bán hàng</Link>
                </li>
                <li className="item">
                  <Link to="/">Thanh toán</Link>
                </li>
                <li className="item">
                  <Link to="/">Pharmacy.Vn Tích Điểm</Link>
                </li>
                <li className="item">
                  <Link to="/">Vận chuyển</Link>
                </li>
                <li className="item">
                  <Link to="/">Trả hàng & Hoàn tiền</Link>
                </li>
                <li className="item">
                  <Link to="/">Liên hệ Pharmacy.Vn</Link>
                </li>
                <li className="item">
                  <Link to="/">Chính sách bảo hành</Link>
                </li>
              </ul>
            </div>
            <div className="ul">
              <ul className="items">
                <span>về pharmacy.vn</span>
                <li className="item">
                  <Link to="/">Giới thiệu về Pharmacy Việt Nam</Link>
                </li>
                <li className="item">
                  <Link to="/">Tuyển dụng</Link>
                </li>
                <li className="item">
                  <Link to="/">Điều Khoản Pharmacy.Vn</Link>
                </li>
                <li className="item">
                  <Link to="/">Chính sách bảo mật</Link>
                </li>
                <li className="item">
                  <Link to="/">Chính Hãng</Link>
                </li>
                <li className="item">
                  <Link to="/">Kênh Người bán</Link>
                </li>
                <li className="item">
                  <Link to="/">Siêu Ưu Đãi</Link>
                </li>
                <li className="item">
                  <Link to="/">Chương trình Tiếp thị liên kết Pharmacy.Vn</Link>
                </li>
                <li className="item">
                  <Link to="/">Liên Hệ Với Truyền Thông</Link>
                </li>
              </ul>
            </div>
            <div className="ul">
              <ul className="items">
                <span>thanh toán</span>
                <li className="item payment-img">
                  <img src="/images/payment/visa.png" alt="" />
                  <img src="/images/payment/mastercard.png" alt="" />
                  <img src="/images/payment/jcb.png" alt="" />
                </li>
                <li className="payment-img">
                  <img src="/images/payment/cod.png" alt="" />
                  <img src="/images/payment/coins.png" alt="" />
                  <img src="/images/payment/paypal.png" alt="" />
                </li>
                <li className="payment-img">
                  <img src="/images/payment/amazon.png" alt="" />
                  <img src="/images/payment/apple.png" alt="" />
                </li>
              </ul>
              <ul className="items">
                <span>đơn vị vận chuyển</span>
                <li className="item payment-img">
                  <img src="/images/shipping/viettelpost.svg" alt="" />
                  <img src="/images/shipping/vietnampost.png" alt="" />
                  <img src="/images/shipping/ghn.png" alt="" />
                </li>
                <li className="payment-img">
                  <img src="/images/shipping/ghtk.png" alt="" />
                  <img src="/images/shipping/JandT.png" alt="" />
                  <img src="/images/shipping/Ninjavan.svg" alt="" />
                </li>
                <li className="payment-img">
                  <img src="/images/shipping/grab.png" alt="" />
                  <img src="/images/shipping/msc.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="ul">
              <ul className="items">
                <span>theo dõi chúng tôi trên</span>
                <li className="item">
                  <Link to="/">Facebook</Link>
                </li>
                <li className="item">
                  <Link to="/">Instagram</Link>
                </li>
                <li className="item">
                  <Link to="/">LinkIn</Link>
                </li>
                <li className="item">
                  <Link to="/">Telegram</Link>
                </li>
                <li className="item">
                  <Link to="/">Pharmaceutical.vn</Link>
                </li>
              </ul>
            </div>
            <div className="ul">
              <ul className="items">
                <span>tải ứng dụng pharmacy.vn ngay</span>
                <li className="item app-img">
                  <img
                    src="/images/app-download/android.png"
                    alt="Play Store"
                  />
                </li>
                <li className="app-img">
                  <img src="/images/app-download/ios.png" alt="App Store" />
                </li>
                <li className="app-img">
                  <img
                    src="/images/app-download/microsoft.png"
                    alt="Microsoft Store"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="overall-middle">
            <hr />
          </div>
          <div className="overall-bottom">
            <div className="company-country">
              <div className="company-text">
                © 2024 Pharmacy.Vn | Tất cả các quyền được bảo lưu.
              </div>
              <div className="company-text">
                <span className="company-zone">Quốc gia & Khu vực:</span>
                <a href="/" className="country-name">
                  Singapore
                </a>
                <span className="country-name-space">|</span>
                <a href="/" className="country-name">
                  Indonesia
                </a>
                <span className="country-name-space">|</span>
                <a href="/" className="country-name">
                  Thái Lan
                </a>
                <span className="country-name-space">|</span>
                <a href="/" className="country-name">
                  Malaysia
                </a>
                <span className="country-name-space">|</span>
                <a href="/" className="country-name">
                  Việt Nam
                </a>
                <span className="country-name-space">|</span>
                <a href="/" className="country-name">
                  Philippines
                </a>
                <span className="country-name-space">|</span>
                <a href="/" className="country-name">
                  México
                </a>
                <span className="country-name-space">|</span>
                <a href="/" className="country-name">
                  Đài Loan
                </a>
              </div>
            </div>
            <div className="policy">
              <a href="/" className="policy-link">
                Chính sách bảo mật
              </a>
              <span className="policy-name-space">|</span>
              <a href="/" className="policy-link">
                Quy chế hoạt động
              </a>
              <span className="policy-name-space">|</span>
              <a href="/" className="policy-link">
                Chính sách vận chuyển
              </a>
              <span className="policy-name-space">|</span>
              <a href="/" className="policy-link">
                CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
              </a>
            </div>
            <div className="credentials">
              <div className="credential">
                <img src="registed-bct.png" alt="BCT Certificate" />
              </div>
              <div className="credential">
                <img src="registed-bct.png" alt="BCT Certificate" />
              </div>
              <div className="credential">
                <img src="pharmacy_logo.png" alt="Company Support" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-information">
          <p className="company-name">Công ty TNHH Pharmacautical.Vn</p>
          <p className="info">
            Địa chỉ: Tầng 12, Tòa nhà Cobi Place, số 29 đường 15B, Phường Phú
            Mỹ, Quận 7, Thành phố Hồ Chí Minh, Việt Nam. Tổng đài hỗ trợ:
            19001331 - Email: cskh@hotro.pharmaceutical.vn
          </p>
          <p className="info">Chịu Trách Nhiệm Quản Lý Nội Dung: Lê Văn Việt</p>
          <p className="info">
            Mã số doanh nghiệp: 01738946308 do Sở Kế hoạch & Đầu tư TP Hồ Chí
            Minh cấp lần đầu ngày 05/03/2002
          </p>
          <p className="info">
            © 2002 - Bản quyền thuộc về Công ty TNHH Pharmacautical.Vn
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
