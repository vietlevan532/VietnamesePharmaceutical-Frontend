import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Link to="/login">Go to login</Link>
    </>
  );
}

export default Home;
