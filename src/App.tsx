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
    let gravity = 0.2; // Reduced gravity force
    const ground = window.innerHeight - box.clientHeight; // Ground position

    const fall = () => {
      // Update position based on velocity
      y += dy;
      box.style.transform = `translate(${x}px, ${y}px)`;

      // Apply gravity
      if (y + (box.clientHeight / 2)< ground) {
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

  return <div ref={boxRef} style={{ width: '50px', height: '50px', border: '2px solid black', position: 'absolute', backgroundColor: 'transparent' }}></div>;
}

function App() {
  // Generate initial positions for boxes
  const boxes = Array.from({ length: 5 }, (_, index) => ({ x: Math.random() * (window.innerWidth) + 50, y: Math.random() * 200 }));

  return (
    <div style={{ position: 'relative' }}>
      {boxes.map((box, index) => (
        <Box key={index} x={box.x} y={box.y} />
      ))}
    </div>
  );
}

export default App;
