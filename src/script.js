document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
  
    let acceleration = 0.7; // Acceleration due to gravity
    let friction = 0.99; // Friction to simulate air resistance
    let bounceFactor = -0.99; // Bounce factor for collisions with the bottom of the window
  
    // Initialize velocities for each box
    let velocities = [];
    boxes.forEach(() => {
      velocities.push({ x: (Math.random() + 0.7) * 10, y: (Math.random() - 0.7) * 10 });
    });
  
    function update() {
      boxes.forEach((box, index) => {
        let velocity = velocities[index];
  
        // Apply gravity
        velocity.y += acceleration;
  
        // Apply friction
        velocity.x *= friction;
        velocity.y *= friction;
  
        // Update position
        let rect = box.getBoundingClientRect();
        let newX = rect.left + velocity.x;
        let newY = rect.top + velocity.y;
  
        // Check for collisions with window edges
        if (newX < 0 || newX + rect.width > window.innerWidth) {
          velocity.x *= bounceFactor;
        }
        if (newY < 0 || newY + rect.height > window.innerHeight) {
          velocity.y *= bounceFactor;
        }
        
        // Update box position
        box.style.left = newX + 'px';
        box.style.top = newY + 'px';
      });
  
      // Request animation frame for smooth animation
      requestAnimationFrame(update);
    }
  
    // Start the animation loop
    update();
  });
  