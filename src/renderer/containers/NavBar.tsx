import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Nav() {
  return (
    <div className="navBar">
      <button type="button">
        <Link to="TestPageOne">Test Page One</Link>
      </button>
      <button type="button">
        <Link to="/">Home</Link>
      </button>
      <button type="button">
        <Link to="TestPageTwo">Test Page Two</Link>
      </button>
    </div>
  );
}
