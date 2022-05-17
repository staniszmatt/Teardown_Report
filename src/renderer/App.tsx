import { MemoryRouter, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icons/logo.png';
import './App.css';
import NavBar from './containers/NavBar';
import TP1 from './components/TestPageOne';
import TP2 from './components/TestPageTwo';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleToDoList';

const TearDownApp = () => {
  return (
    <div className="container">
      <div className="backgroundImage">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <MemoryRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TearDownApp />} />
        <Route path="TestPageOne" element={<TP1 />} />
        <Route path="TestPageTwo" element={<TP2 />} />
      </Routes>
    </MemoryRouter>
  );
}
