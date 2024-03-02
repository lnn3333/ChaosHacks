import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="box"></div> {/* This is the box */}
    </div>
  )
}

export default App
