import { Link } from 'react-router-dom';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="container-home">
          <h1>Hello world</h1>
          <Link to="/login">Go to login</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
