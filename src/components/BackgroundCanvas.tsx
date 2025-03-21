
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
    const stars: {x: number, y: number, radius: number, speed: number, opacity: number, color: string}[] = [];
    const numStars = 300; // More stars for better effect
    
    // Star colors with vibrant and pastel options
    const starColors = [
      'rgba(255, 255, 255, 1)',     // White
      'rgba(173, 216, 230, 1)',     // Light blue (pastel)
      'rgba(255, 182, 193, 1)',     // Light pink (pastel)
      'rgba(255, 240, 180, 1)',     // Light yellow (pastel)
      'rgba(211, 211, 255, 1)',     // Light purple (pastel)
      'rgba(152, 251, 152, 1)',     // Light green (pastel)
      'rgba(135, 206, 250, 1)',     // Sky blue (vibrant)
      'rgba(250, 128, 114, 0.9)',   // Salmon (vibrant)
      'rgba(238, 130, 238, 0.9)',   // Violet (vibrant)
      'rgba(255, 215, 0, 0.9)',     // Gold (vibrant)
      'rgba(127, 255, 212, 0.9)',   // Aquamarine (vibrant)
    ];
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.2, // Slightly larger stars
        speed: Math.random() * 0.035 + 0.01, // Reduce maximum speed to lower flickering
        opacity: Math.random() * 0.5 + 0.5, // Increased minimum opacity for less flickering
        color: starColors[Math.floor(Math.random() * starColors.length)]
      });
    }
    
    // Nebula colors with vibrant and pastel options
    const nebulaColors = [
      // Pastel nebulae
      ['rgba(255, 182, 193, 0.15)', 'rgba(255, 182, 193, 0)'], // Light pink
      ['rgba(173, 216, 230, 0.15)', 'rgba(173, 216, 230, 0)'], // Light blue
      ['rgba(152, 251, 152, 0.15)', 'rgba(152, 251, 152, 0)'], // Light green
      ['rgba(230, 230, 250, 0.15)', 'rgba(230, 230, 250, 0)'], // Lavender
      ['rgba(255, 228, 196, 0.15)', 'rgba(255, 228, 196, 0)'], // Bisque
      
      // Vibrant nebulae
      ['rgba(255, 105, 180, 0.12)', 'rgba(255, 105, 180, 0)'], // Hot pink
      ['rgba(138, 43, 226, 0.12)', 'rgba(138, 43, 226, 0)'],   // Blue violet
      ['rgba(50, 205, 50, 0.12)', 'rgba(50, 205, 50, 0)'],     // Lime green
      ['rgba(255, 69, 0, 0.12)', 'rgba(255, 69, 0, 0)'],       // Orange red
      ['rgba(30, 144, 255, 0.12)', 'rgba(30, 144, 255, 0)'],   // Dodger blue
    ];
    
    // Create persistent nebulae to avoid constant re-randomization (reduces flickering)
    const persistentNebulae = [];
    const numNebulae = 10; // Increase number of nebulae
    
    for (let i = 0; i < numNebulae; i++) {
      persistentNebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 250 + 100,
        colorSet: nebulaColors[Math.floor(Math.random() * nebulaColors.length)]
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dark gradient background with a touch of color
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(5, 10, 20, 1)'); // Dark blue
      gradient.addColorStop(0.4, 'rgba(12, 15, 35, 1)'); // Midnight blue
      gradient.addColorStop(0.7, 'rgba(20, 10, 30, 1)'); // Dark purple
      gradient.addColorStop(1, 'rgba(10, 12, 25, 1)'); // Dark blue-purple
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw persistent nebulae first (in background)
      persistentNebulae.forEach(nebula => {
        const nebulaGradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0, 
          nebula.x, nebula.y, nebula.radius
        );
        nebulaGradient.addColorStop(0, nebula.colorSet[0]);
        nebulaGradient.addColorStop(1, nebula.colorSet[1]);
        
        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      
      // Draw stars with their unique colors
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Update star position for next frame
        star.y += star.speed;
        
        // Reset star if it goes off canvas
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Occasional shooting star (reduced probability to lower flickering)
      if (Math.random() < 0.02) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 120 + 80,
          speed: Math.random() * 10 + 5, // Reduced speed for less flickering
          angle: Math.PI / 4,
          color: starColors[Math.floor(Math.random() * starColors.length)].replace('1)', '0.9)') // Use star colors
        };
        
        const drawShootingStar = () => {
          const tail = {
            x: shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
            y: shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
          };
          
          // Create gradient for shooting star with the selected color
          const gradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y,
            tail.x, tail.y
          );
          gradient.addColorStop(0, shootingStar.color);
          gradient.addColorStop(1, shootingStar.color.replace('0.9)', '0)'));
          
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
