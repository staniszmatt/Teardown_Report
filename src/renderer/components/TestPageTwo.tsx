import { Link } from 'react-router-dom';
import './TestPageStyle.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TestPageTwo() {
  return (
    <div className="testPageContainerTwo">
      <Link to="/">Home</Link>
      <h1>Test Page Two</h1>
    </div>
  );
}
