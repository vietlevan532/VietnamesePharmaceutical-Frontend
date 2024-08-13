import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import ForgotPassword from './pages/LoginPage/ForgotPassword/ForgotPassword';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import CategoryComponent from './pages/Component/Category/CategoryComponent';

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
