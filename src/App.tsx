import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import ForgotPassword from './pages/LoginPage/ForgotPassword/ForgotPassword';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProductComponent from './pages/Component/Product/ProductComponent';

export function App() {
  return (
    <Routes>
      <Route
        path="/product"
        element={
          <ProductComponent
            id={1}
            name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
            image="/images/product.jpg"
            price={8.839}
            rating={5}
            timeLeft={26}
            totalSales={5762}
            productType="openBackHeadphone"
          />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Home />} />
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
