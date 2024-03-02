import { useEffect } from 'react'

import './App.css'
import { startGame } from './game'; // Importing startGame

const App: React.FC = () => {
  useEffect(() => {
    startGame(); // Start the game
  }, []);

  return (
    <div>
      {}
    </div>
  );
};

export default App
