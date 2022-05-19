import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Nav() {
  return (
    <div className="navBar">
      <Link to="TestPageOne">
        <button type="button">Test Page One</button>
      </Link>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="TestPageTwo">
        <button type="button">Test Page Two</button>
      </Link>
    </div>
  );
}
