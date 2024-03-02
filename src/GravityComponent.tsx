import                                                                        MM{ useState, useEffect } from 'react';

const GravityComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMovement = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMovement);

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        borderRadius: '50%',
        zIndex: 9999, // Ensure it's above other elements
      }}
    />
  );
};

export default GravityComponent;
