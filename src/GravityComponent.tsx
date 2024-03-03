import React, { useState, useEffect } from 'react';

const GravityComponent = () => {
  const [fallingComponents, setFallingComponents] = useState([]);

  useEffect(() => {
    const handleMouseMovement = (event) => {
      const { clientX, clientY } = event;
      setFallingComponents((prevComponents) => [
        ...prevComponents,
        { id: Date.now(), x: clientX, y: clientY },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMovement);

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  return (
    <>
      {fallingComponents.map(({ id, x, y }) => (
        <FallingComponent key={id} x={x} y={y} />
      ))}
    </>
  );
};

const FallingComponent = ({ x, y }) => {
  const [position, setPosition] = useState({ x, y });
  const [backgroundColor, setBackgroundColor] = useState('');
  const [sizeBall, setSize] = useState('');

  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']; // Array of colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
    const randomSize = Math.random() * 15 + 5; // Generate random size between 5 and 20
    setSize(randomSize);
    setBackgroundColor(randomColor);

    const fallInterval = setInterval(() => {
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + 2, // Adjust the falling speed as needed
      }));
    }, 100); // Adjust the falling speed as needed

    return () => clearInterval(fallInterval);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: sizeBall,
        height: sizeBall,
        backgroundColor: backgroundColor,
        borderRadius: '50%',
        zIndex: 9999, // Ensure it's above other elements
      }}
    />
  );
};

export default GravityComponent;
