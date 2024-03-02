import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';

function PhysicsSimulation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
    const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    Matter.World.add(world, [boxA, ground]);

    Matter.Engine.run(engine);

    const render = Matter.Render.create({
      element: canvas,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false
      }
    });

    Matter.Render.run(render);

    return () => Matter.Render.stop(render);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default PhysicsSimulation;
