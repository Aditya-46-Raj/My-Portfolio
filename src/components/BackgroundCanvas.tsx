
import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Space background animation effect with reduced opacity
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
    
    // Stars properties with reduced count
    const stars: {x: number, y: number, radius: number, speed: number, opacity: number, color: string}[] = [];
    const numStars = 150; // Fewer stars for better content visibility
    
    // Star colors with reduced opacity
    const starColors = isDark ? [
      'rgba(255, 255, 255, 0.5)',   // White with reduced opacity
      'rgba(173, 216, 230, 0.5)',   // Light blue with reduced opacity
      'rgba(255, 182, 193, 0.5)',   // Light pink with reduced opacity
      'rgba(255, 240, 180, 0.5)',   // Light yellow with reduced opacity
      'rgba(211, 211, 255, 0.5)',   // Light purple with reduced opacity
    ] : [
      'rgba(100, 149, 237, 0.5)',   // Cornflower Blue with reduced opacity
      'rgba(65, 105, 225, 0.5)',    // Royal Blue with reduced opacity
      'rgba(70, 130, 180, 0.5)',    // Steel Blue with reduced opacity
      'rgba(106, 90, 205, 0.5)',    // Slate Blue with reduced opacity
      'rgba(123, 104, 238, 0.5)',   // Medium Slate Blue with reduced opacity
    ];
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.2, // Slightly smaller stars
        speed: Math.random() * 0.03 + 0.01,
        opacity: Math.random() * 0.4 + 0.2, // Reduced opacity
        color: starColors[Math.floor(Math.random() * starColors.length)]
      });
    }
    
    // Nebula colors with significantly reduced opacity
    const nebulaColors = isDark ? [
      ['rgba(255, 182, 193, 0.05)', 'rgba(255, 182, 193, 0)'], // Light pink
      ['rgba(173, 216, 230, 0.05)', 'rgba(173, 216, 230, 0)'], // Light blue
      ['rgba(152, 251, 152, 0.05)', 'rgba(152, 251, 152, 0)'], // Light green
    ] : [
      ['rgba(65, 105, 225, 0.05)', 'rgba(65, 105, 225, 0)'],   // Royal Blue
      ['rgba(106, 90, 205, 0.05)', 'rgba(106, 90, 205, 0)'],   // Slate Blue
      ['rgba(138, 43, 226, 0.05)', 'rgba(138, 43, 226, 0)'],   // Blue Violet
    ];
    
    // Create persistent nebulae with reduced count
    const persistentNebulae = [];
    const numNebulae = 4; // Fewer nebulae for better visibility
    
    for (let i = 0; i < numNebulae; i++) {
      persistentNebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 150 + 50, // Smaller nebulae
        colorSet: nebulaColors[Math.floor(Math.random() * nebulaColors.length)]
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient background based on theme with increased transparency
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      if (isDark) {
        // Dark theme gradient with increased transparency
        gradient.addColorStop(0, 'rgba(5, 10, 20, 0.6)');
        gradient.addColorStop(0.4, 'rgba(12, 15, 35, 0.6)');
        gradient.addColorStop(0.7, 'rgba(20, 10, 30, 0.6)');
        gradient.addColorStop(1, 'rgba(10, 12, 25, 0.6)');
      } else {
        // Light theme gradient with increased transparency
        gradient.addColorStop(0, 'rgba(240, 240, 255, 0.6)');
        gradient.addColorStop(0.4, 'rgba(230, 230, 250, 0.6)');
        gradient.addColorStop(0.7, 'rgba(242, 240, 255, 0.6)');
        gradient.addColorStop(1, 'rgba(248, 245, 255, 0.6)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw persistent nebulae with reduced opacity
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
      
      // Draw stars with reduced opacity
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
      
      // Occasional shooting star with very low frequency
      if (Math.random() < 0.005) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 7 + 3,
          angle: Math.PI / 4,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        };
        
        const drawShootingStar = () => {
          const tail = {
            x: shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
            y: shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
          };
          
          // Create gradient for shooting star with reduced opacity
          const gradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y,
            tail.x, tail.y
          );
          gradient.addColorStop(0, shootingStar.color);
          gradient.addColorStop(1, shootingStar.color.replace(/[\d.]+\)$/, '0)'));
          
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(tail.x, tail.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
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
  }, [isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10"
      style={{ filter: 'blur(1px)', opacity: 0.4 }} // Significantly reduced opacity for better content visibility
    />
  );
};

export default BackgroundCanvas;
