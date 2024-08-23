import { HashRouter, Route, Routes } from 'react-router-dom';

import Shop from './pages/Shop/Shop';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import ForgotPassword from './pages/LoginPage/ForgotPassword/ForgotPassword';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import CategoryComponent from './pages/Shop/Component/Category/CategoryComponent';
import ProfilePage from './pages/Shop/ProfilePage/ProfilePage';
import AddressPage from './pages/Shop/AddressPage/AddressPage';
import PaymentPage from './pages/Shop/PaymentPage/PaymentPage';
import PrivacyPage from './pages/Shop/PrivacyPage/PrivacyPage';
import NotificationSettings from './pages/Shop/NotificationSettings/NotificationSettings';
import ChangePassword from './pages/Shop/ChangePassword/ChangePassword';

export function App() {
  return (
    <Routes>
      <Route
        path="/product"
        element={
          <CategoryComponent
            id={1}
            name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
            image="/images/product.jpg"
          />
        }
      />
      <Route path="/user/account/profile" element={<ProfilePage />} />
      <Route path="/user/account/address" element={<AddressPage />} />
      <Route path="/user/account/payment" element={<PaymentPage />} />
      <Route path="/user/account/change-password" element={<ChangePassword />} />
      <Route path="/user/setting/privacy" element={<PrivacyPage />} />
      <Route path="/user/setting/notification" element={<NotificationSettings />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
