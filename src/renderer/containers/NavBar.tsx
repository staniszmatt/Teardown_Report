import { Link } from 'react-router-dom';
import './NavBar.css';

// export default function Nav() {
//   return (
//     <div className="navBar">
//       <button type="button">
//         <Link to="TestPageOne">Test Page One</Link>
//       </button>
//       <button type="button">
//         <Link to="/">Home</Link>
//       </button>
//       <button type="button">
//         <Link to="TestPageTwo">Test Page Two</Link>
//       </button>
//     </div>
//   );
// }

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
