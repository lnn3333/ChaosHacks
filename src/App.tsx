import { useEffect } from 'react'

import './App.css'
import { startGame } from './game';

function App() {
  useEffect(() => {
    startGame();
  }, []);

  return (
    <div>
      {}
    </div>
  );
}

export default App
