import './Shop.css';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import ProductComponent from './Component/Product/ProductComponent';

function Shop() {
  return (
    <>
      <Header />
      <div className="shop-home">
        <div className="container-shop-home">
          <div className="banner-content">banner-content</div>
          <div className="content-infor">
            <div className="categories-content">categories-content</div>
            <div className="best-seller">best-seller</div>
            <div className="ads">ads</div>
            <div className="mall-content">mall-content</div>
            <div className="top-search">top-search</div>
            <div className="product-suggestion">
              <section className="product-suggest-section">
                <div className="product-suggest-section-container">
                  <ProductComponent
                    id={1}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={5}
                    timeLeft={26}
                    totalSales={324}
                  />
                  <ProductComponent
                    id={2}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={4}
                    timeLeft={26}
                    totalSales={324}
                  />
                  <ProductComponent
                    id={3}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={5}
                    timeLeft={26}
                    totalSales={324}
                  />
                  <ProductComponent
                    id={4}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={5}
                    timeLeft={26}
                    totalSales={324}
                  />
                  <ProductComponent
                    id={5}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={1}
                    timeLeft={26}
                    totalSales={324}
                  />
                  <ProductComponent
                    id={6}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={5}
                    timeLeft={26}
                    totalSales={324}
                  />
                  <ProductComponent
                    id={7}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={4}
                    timeLeft={26}
                    totalSales={324}
                  />
                  <ProductComponent
                    id={8}
                    name="MASSDROP X SENNHEISER HD 6XX HEADPHONES"
                    image="/images/product.jpg"
                    price={200000}
                    rating={3}
                    timeLeft={26}
                    totalSales={324}
                  />
                </div>
              </section>
            </div>
            <div className="see-more">
              <button type="button">See more</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
