import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Outlet } from 'react-router';

function App() {

  return (
    <>
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
