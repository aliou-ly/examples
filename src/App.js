import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom";
import {useAuth} from "./pages/login/AuthProvider";

function App() {
    const {logout} = useAuth()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Link to={'user'}>Lien User</Link>
          <Link to={'photo'}>Lien Photo</Link>
          <Link to={'log1'}>Lien log1</Link>
          <Link to={'log2'}>Lien log2</Link>
        <button onClick={logout}>Se déconnecter</button>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
