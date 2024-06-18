import logo from './logo.svg';
import './App.css';
import LoginForm from './loginForm';
import NavBar from './navBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <NavBar />
          <LoginForm />
        </div>
        
      </header>
    </div>
  );
}

export default App;
