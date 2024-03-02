import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [falling, setFalling] = useState(true)

  useEffect(() => {
    const box = document.querySelector('.box') as HTMLElement
    const container = document.querySelector('.container') as HTMLElement
    const containerRect = container.getBoundingClientRect()
    
    const fall = () => {
      if (position.y < containerRect.bottom - box.clientHeight) {
        setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y + 1 })) // Update position
      } else {
        setFalling(false) // Stop falling when box reaches bottom
      }
    }

    if (falling) {
      const fallInterval = setInterval(fall, 10)
      return () => clearInterval(fallInterval)
    }
  }, [position, falling])

  return (
    <div className="container">
      <div className="box" style={{ left: position.x, top: position.y }}></div>
    </div>
  )
}

export default App
