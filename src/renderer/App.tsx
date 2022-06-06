import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './containers/NavBar';
import TP1 from './components/WorkOrderEditPage';
import TP2 from './components/TestPageTwo';
import ModalPage from './containers/ModalPage';
import TeardownApp from './containers/TeardownApp';

export default function App() {
  return (
    <MemoryRouter>
      <ModalPage />
      <NavBar />
      <Routes>
        <Route path="/" element={<TeardownApp />} />
        <Route path="TestPageOne" element={<TP1 />} />
        <Route path="TestPageTwo" element={<TP2 />} />
      </Routes>
    </MemoryRouter>
  );
}
