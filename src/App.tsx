import { useRef, useEffect } from 'react';

interface BoxProps {
  x: number;
  y: number;
}

function Box({ x, y }: BoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const animationFrameIdRef = useRef<number>();

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    let dy = 0; // Vertical velocity
    let gravity = 0.5; // Gravity force
    const ground = window.innerHeight - box.clientHeight; // Ground position

    const fall = () => {
      // Update position based on velocity
      y += dy;
      box.style.transform = `translate(${x}px, ${y}px)`;

      // Apply gravity
      if (y < ground) {
        dy += gravity; // Increase velocity if above ground
      } else {
        dy = 0; // Stop falling when hitting the ground
      }

      // Request next animation frame
      animationFrameIdRef.current = requestAnimationFrame(fall);
    };

    // Start falling animation
    fall();

    // Clean up
    return () => cancelAnimationFrame(animationFrameIdRef.current!);
  }, [x, y]); // Re-run effect when x or y changes

  return <div ref={boxRef} style={{ width: '50px', height: '50px', backgroundColor: 'blue', position: 'absolute' }}></div>;
}

function App() {
  // Generate initial positions for boxes
  const boxes = Array.from({ length: 5 }, (_, index) => ({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }));

  return (
    <div>
      {boxes.map((box, index) => (
        <Box key={index} x={box.x} y={box.y} />
      ))}
    </div>
  );
}

export default App;
