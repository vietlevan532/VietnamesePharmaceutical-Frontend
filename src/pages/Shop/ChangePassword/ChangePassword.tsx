import './ChangePassword.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import AccountSettingComponent from '../Component/AccountSetting/AccountSettingComponent';

function ChangePassword() {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <>
            <Header />
            <div className="change-password">
                <div className="change-password-container">
                    <AccountSettingComponent pageName='change-password' />
                    <div className="change-password-content">
                        <div className="change-password-top">
                            <h2>Đổi Mật Khẩu</h2>
                            <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
                        </div>
                        <div className="change-password-body">
                            <div className="new-password">
                                <div className="change-password-body-left">
                                    <label htmlFor="newPassword">Mật khẩu mới</label>
                                </div>
                                <div className="change-password-body-right">
                                    <input type={showNewPassword ? 'text' : 'password'} id="newPassword" />
                                    <FontAwesomeIcon 
                                        className="change-password-active-icon" 
                                        icon={showNewPassword ? faEye : faEyeSlash}
                                        style={{color:'#555', fontSize:'18px', fontWeight:'100', cursor:'pointer', userSelect:'none'}}
                                        onClick={toggleShowNewPassword}    
                                    />
                                </div>
                            </div>
                            <div className="confirm-password">
                                <div className="change-password-body-left">
                                    <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                                </div>
                                <div className="change-password-body-right">
                                    <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" />
                                    <FontAwesomeIcon 
                                        className="change-password-active-icon"
                                        icon={showConfirmPassword ? faEye : faEyeSlash} 
                                        style={{color:'#555', fontSize:'18px', fontWeight:'100', cursor:'pointer', userSelect:'none'}} 
                                        onClick={toggleShowConfirmPassword}    
                                    />
                                </div>
                            </div>
                            <div className="change-password-button">
                                <div className="change-password-body-left">
                                    <label htmlFor="submit-change"></label>
                                </div>
                                <div className="change-password-body-right">
                                    <button type="button" id="submit-change">Xác Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ChangePassword;
