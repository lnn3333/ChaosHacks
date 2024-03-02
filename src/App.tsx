import { useEffect } from 'react'

import './App.css'
import { startGame } from './game'; // Importing startGame function from game.js

const App: React.FC = () => {
  useEffect(() => {
    startGame(); // Start the game when the component mounts
  }, []);

  return (
    <div>
      {/* Your React component JSX */}
    </div>
  );
};

export default App
