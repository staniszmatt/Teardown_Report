import { Link } from 'react-router-dom';
import './TestPageStyle.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TestPageOne() {
  return (
    <div className="testPageContainerOne">
      <Link to="/">Home</Link>
    </div>
  );
}
