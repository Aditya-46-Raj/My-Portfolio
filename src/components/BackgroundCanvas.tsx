
import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

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
    
    // Star colors with vibrant and pastel options - different for dark/light modes
    const starColors = isDark ? [
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
    ] : [
      'rgba(100, 149, 237, 0.9)',   // Cornflower Blue
      'rgba(65, 105, 225, 0.9)',    // Royal Blue
      'rgba(70, 130, 180, 0.9)',    // Steel Blue
      'rgba(106, 90, 205, 0.9)',    // Slate Blue
      'rgba(123, 104, 238, 0.9)',   // Medium Slate Blue
      'rgba(147, 112, 219, 0.9)',   // Medium Purple
      'rgba(138, 43, 226, 0.9)',    // Blue Violet
      'rgba(148, 0, 211, 0.9)',     // Dark Violet
      'rgba(153, 50, 204, 0.9)',    // Dark Orchid
      'rgba(186, 85, 211, 0.9)',    // Medium Orchid
      'rgba(218, 112, 214, 0.9)',   // Orchid
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
    
    // Nebula colors with vibrant and pastel options - different for dark/light modes
    const nebulaColors = isDark ? [
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
    ] : [
      // Light mode nebulae - blues and purples
      ['rgba(65, 105, 225, 0.10)', 'rgba(65, 105, 225, 0)'],   // Royal Blue
      ['rgba(106, 90, 205, 0.10)', 'rgba(106, 90, 205, 0)'],   // Slate Blue
      ['rgba(138, 43, 226, 0.10)', 'rgba(138, 43, 226, 0)'],   // Blue Violet
      ['rgba(72, 61, 139, 0.10)', 'rgba(72, 61, 139, 0)'],     // Dark Slate Blue
      ['rgba(123, 104, 238, 0.10)', 'rgba(123, 104, 238, 0)'], // Medium Slate Blue
      ['rgba(147, 112, 219, 0.10)', 'rgba(147, 112, 219, 0)'], // Medium Purple
      ['rgba(153, 50, 204, 0.10)', 'rgba(153, 50, 204, 0)'],   // Dark Orchid
      ['rgba(148, 0, 211, 0.10)', 'rgba(148, 0, 211, 0)'],     // Dark Violet
      ['rgba(186, 85, 211, 0.10)', 'rgba(186, 85, 211, 0)'],   // Medium Orchid
      ['rgba(128, 0, 128, 0.10)', 'rgba(128, 0, 128, 0)'],     // Purple
    ];
    
    // Create persistent nebulae to avoid constant re-randomization (reduces flickering)
    const persistentNebulae = [];
    const numNebulae = isDark ? 8 : 6; // Fewer nebulae for better visibility
    
    for (let i = 0; i < numNebulae; i++) {
      persistentNebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 80, // Slightly smaller nebulae
        colorSet: nebulaColors[Math.floor(Math.random() * nebulaColors.length)]
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient background based on theme
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      if (isDark) {
        // Dark theme gradient - less opacity for better content visibility
        gradient.addColorStop(0, 'rgba(5, 10, 20, 0.8)');      // Dark blue
        gradient.addColorStop(0.4, 'rgba(12, 15, 35, 0.8)');   // Midnight blue
        gradient.addColorStop(0.7, 'rgba(20, 10, 30, 0.8)');   // Dark purple
        gradient.addColorStop(1, 'rgba(10, 12, 25, 0.8)');     // Dark blue-purple
      } else {
        // Light theme gradient - less opacity for better content visibility
        gradient.addColorStop(0, 'rgba(240, 240, 255, 0.8)');  // Very light blue
        gradient.addColorStop(0.4, 'rgba(230, 230, 250, 0.8)'); // Lavender
        gradient.addColorStop(0.7, 'rgba(242, 240, 255, 0.8)'); // Light purple
        gradient.addColorStop(1, 'rgba(248, 245, 255, 0.8)');  // White with a hint of purple
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw persistent nebulae with reduced opacity
      persistentNebulae.forEach(nebula => {
        const nebulaGradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0, 
          nebula.x, nebula.y, nebula.radius
        );
        // Reduce opacity of nebulae
        const startColor = nebula.colorSet[0].replace(/[\d.]+\)$/, '0.08)');
        const endColor = nebula.colorSet[1].replace(/[\d.]+\)$/, '0)');
        
        nebulaGradient.addColorStop(0, startColor);
        nebulaGradient.addColorStop(1, endColor);
        
        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      
      // Draw stars with reduced opacity
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // Reduce star opacity
        const starColor = star.color.replace(/[\d.]+\)$/, '0.6)');
        ctx.fillStyle = starColor;
        ctx.fill();
        
        // Update star position for next frame
        star.y += star.speed;
        
        // Reset star if it goes off canvas
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Occasional shooting star with reduced frequency
      if (Math.random() < 0.01) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 120 + 80,
          speed: Math.random() * 10 + 5, // Reduced speed for less flickering
          angle: Math.PI / 4,
          color: starColors[Math.floor(Math.random() * starColors.length)].replace('1)', '0.7)') // Use star colors
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
          gradient.addColorStop(1, shootingStar.color.replace('0.7)', '0)'));
          
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
  }, [isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10"
      style={{ filter: 'blur(1px)', opacity: 0.7 }} // Reduced opacity for better content visibility
    />
  );
};

export default BackgroundCanvas;
