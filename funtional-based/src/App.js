// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar />
      Hii hardik this is home
      <Outlet />
    </div>
  );
}

export default App;
