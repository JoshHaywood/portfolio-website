import { useRef, useEffect } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = canvas.clientWidth);
    const h = (canvas.height = canvas.clientHeight);
    
    const points = [];
    const amount = 320; 
    const speed = 12;
    const size = 1;
    const lineWidth = 0.1;
    const connectionDistance = 225;
    const randomSize = 0.5;

    // Update canvas dimensions and points on resize
    window.addEventListener("resize", () => {
      const w = (canvas.width = canvas.clientWidth);
      const h = (canvas.height = canvas.clientHeight);

      // Point color
      ctx.fillStyle = "hsl(0, 0%, 50%)";
      ctx.fillRect(0, 0, w, h);
    }, false);

    // Canvas setup
    function setup() {
      const w = (canvas.width = canvas.clientWidth);
      const h = (canvas.height = canvas.clientHeight);

      // Calculate number of dots to create based on screen size
      const screenDelta = Math.sqrt(w + h) / 100;
      const useAmount = amount * screenDelta;

      // Create new Point objects and add them to the points array
      for (let i = 0; i < useAmount; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const xSpeed = Math.random() * (speed / 10) - speed / 20;
        const ySpeed = Math.random() * (speed / 10) - speed / 20;

        points.push(new Point(x, y, xSpeed, ySpeed));
      }

      // Point color
      ctx.fillStyle = "hsl(0, 0%, 50%)";
      ctx.fillRect(0, 0, w, h);

      draw();
    };

    // Draw points and connections on canvas
    function draw() {
      ctx.globalCompositeOperation = "source-over";

      ctx.fillStyle = "hsla(210, 17%, 7%)"; // Canvas background color
      ctx.fillRect(0, 0, w, h);

      ctx.lineWidth = lineWidth;
      ctx.fillStyle = "hsl(0, 0%, 50%)"; // Point color

      // Calculate maximum distance for dots to be connected based on screen size
      const screenDelta = Math.sqrt(w + h) / 100;
      const useDistance = connectionDistance * screenDelta;

      ctx.globalCompositeOperation = "lighter";

      // Iterate through all point pairs and draw a line between them if they are close enough
      points.forEach((point) => {
        points.forEach((connection) => {
          const distanceX = Math.pow(connection.x - point.x, 2);
          const distanceY = Math.pow(connection.y - point.y, 2);
          const distance = Math.sqrt(distanceX + distanceY);

          // If points are close enough, draw a line between them
          if (distance <= useDistance) {
            const alpha = 1.0 - distance / useDistance;

            ctx.strokeStyle = "hsla(0, 0%, 80%, " + alpha + ")"; // Connection color

            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();
            ctx.closePath();
          }
        });
      });

      ctx.globalCompositeOperation = "source-over";

      // Draw each point on the canvas
      points.forEach((point) => {
        point.draw();
      });

      window.requestAnimationFrame(draw);
    };

    // Point class to represent and draw dots on the canvas
    class Point {
      constructor(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
      };

      // Draw dot on canvas
      draw() {
        // Calculate random movement to apply to point
        const xNoise = Math.random() * randomSize - randomSize / 2;
        const yNoise = Math.random() * randomSize - randomSize / 2;

        // Update point position based on movement speed and random movement
        this.x += this.xSpeed + xNoise;
        this.y += this.ySpeed + yNoise;

        // If point goes off canvas, wrap it around to the other side
        if (this.x > w) {
          this.x = 0;
        };
        if (this.y > h) {
          this.y = 0;
        };
        if (this.x < 0) {
          this.x = w;
        };
        if (this.y < 0) {
          this.y = h;
        };

        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();
      };
    };

    setup(); // Initialize canvas
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
};