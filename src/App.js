import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;
