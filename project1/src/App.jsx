import './App.css';
import logo from './assets/images/Nike-Logo.png';

const App = () => {
  return <div> 
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  </div>
}
export default App;