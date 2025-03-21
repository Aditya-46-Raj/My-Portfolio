
import { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Space background animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Make it taller to cover scrolling
    };
    
    // Initialize canvas
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Stars properties
    const stars: {x: number, y: number, radius: number, speed: number, opacity: number}[] = [];
    const numStars = 300; // More stars for better effect
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8, // Slightly larger stars
        speed: Math.random() * 0.05 + 0.01,
        opacity: Math.random() * 0.7 + 0.3 // Brighter stars
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 15, 30, 1)'); // Darker blue
      gradient.addColorStop(0.5, 'rgba(20, 25, 45, 1)'); // Mid-tone
      gradient.addColorStop(1, 'rgba(15, 20, 40, 1)'); // Slightly lighter at bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Update star position for next frame
        star.y += star.speed;
        
        // Reset star if it goes off canvas
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Occasional shooting star
      if (Math.random() < 0.03) { // Increase probability for more shooting stars
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 15 + 10,
          angle: Math.PI / 4
        };
        
        const drawShootingStar = () => {
          const tail = {
            x: shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
            y: shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
          };
          
          // Create gradient for shooting star
          const gradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y,
            tail.x, tail.y
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(tail.x, tail.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Update position
          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
          
          // Continue animation if still on screen
          if (shootingStar.x < canvas.width && shootingStar.y < canvas.height) {
            requestAnimationFrame(drawShootingStar);
          }
        };
        
        drawShootingStar();
      }
      
      // Draw nebulae (colored clouds)
      for (let i = 0; i < 5; i++) {
        const radius = Math.random() * 150 + 50;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        // Create radial gradient for nebula
        const colors = [
          ['rgba(255, 100, 100, 0.05)', 'rgba(255, 100, 100, 0)'],  // Red
          ['rgba(100, 100, 255, 0.05)', 'rgba(100, 100, 255, 0)'],  // Blue
          ['rgba(180, 100, 255, 0.05)', 'rgba(180, 100, 255, 0)'],  // Purple
          ['rgba(100, 255, 100, 0.05)', 'rgba(100, 255, 100, 0)'],  // Green
          ['rgba(255, 200, 100, 0.05)', 'rgba(255, 200, 100, 0)']   // Orange
        ];
        
        const colorSet = colors[Math.floor(Math.random() * colors.length)];
        const nebula = ctx.createRadialGradient(x, y, 0, x, y, radius);
        nebula.addColorStop(0, colorSet[0]);
        nebula.addColorStop(1, colorSet[1]);
        
        ctx.fillStyle = nebula;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10"
      style={{ filter: 'blur(1px)' }}
    />
  );
};

export default BackgroundCanvas;
