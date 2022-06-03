import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'src/components/Button';
import { useNavigate, useRoutes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  // const renderRoutes = useRoutes([]);

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
}

export default App;
