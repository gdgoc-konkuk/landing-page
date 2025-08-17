'use client';

import React, { useEffect, useRef, useState } from 'react';

const WaterDropCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [basePosition, setBasePosition] = useState({ x: 0, y: 0 });
  const [currentPosition2, setCurrentPosition2] = useState({ x: 0, y: 0 });
  const [basePosition2, setBasePosition2] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);
  const [isInHomeSection, setIsInHomeSection] = useState(true);
  const animationFrame = useRef<number>();
  const startTime = useRef<number>(Date.now());

  // Initialize base positions
  useEffect(() => {
    const initializePosition = () => {
      // First dot (left side)
      const initialX = window.innerWidth * 0.2; // 20% from left (more to the left)
      const initialY = (window.innerHeight * 2) / 3; // 1/3 from bottom
      setBasePosition({ x: initialX, y: initialY });
      setCurrentPosition({ x: initialX, y: initialY });

      // Second dot (right side)
      const initial2X = window.innerWidth * 0.8; // 80% from left (more to the right)
      const initial2Y = window.innerHeight * 0.3; // 1/3 from top
      setBasePosition2({ x: initial2X, y: initial2Y });
      setCurrentPosition2({ x: initial2X, y: initial2Y });
    };

    // Initialize immediately and on resize
    initializePosition();
    window.addEventListener('resize', initializePosition);
    return () => window.removeEventListener('resize', initializePosition);
  }, []);

  // Check home section visibility
  useEffect(() => {
    const updateVisibility = () => {
      const logoElement = document.querySelector('img[alt*="GDGoC Konkuk University Logo"]');
      if (logoElement) {
        const rect = logoElement.getBoundingClientRect();
        // Check if home section is in viewport
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        setIsInHomeSection(isVisible);
      } else {
        setIsInHomeSection(false);
      }
    };

    // Update position on load, resize, and scroll
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
    window.addEventListener('scroll', updateVisibility);
    
    // Also check periodically in case logo loads later
    const interval = setInterval(updateVisibility, 1000);
    
    return () => {
      window.removeEventListener('resize', updateVisibility);
      window.removeEventListener('scroll', updateVisibility);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setMousePos({ x: newX, y: newY });
      
      // Check if hovering over text elements
      const element = document.elementFromPoint(newX, newY);
      const hasText = element && (
        element.tagName === 'H1' ||
        element.tagName === 'H2' ||
        element.tagName === 'H3' ||
        element.tagName === 'H4' ||
        element.tagName === 'H5' ||
        element.tagName === 'H6' ||
        element.tagName === 'P' ||
        element.tagName === 'SPAN' ||
        element.tagName === 'A' ||
        element.tagName === 'BUTTON' ||
        element.closest('h1, h2, h3, h4, h5, h6, p, span, a, button')
      );
      setIsOverText(!!hasText);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Main animation loop
  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime.current) / 1000; // seconds
      
      // Calculate floating animation (slow gentle movement)
      const floatRadius = 30; // radius of floating movement
      const floatSpeed = 0.5; // speed of floating (lower = slower)
      const floatX = Math.sin(elapsed * floatSpeed) * floatRadius;
      const floatY = Math.cos(elapsed * floatSpeed * 0.7) * floatRadius * 0.6; // Different frequency for Y
      
      // Calculate base floating position
      const floatingBaseX = basePosition.x + floatX;
      const floatingBaseY = basePosition.y + floatY;
      
      // Calculate distance to mouse from current position
      const dx = mousePos.x - currentPosition.x;
      const dy = mousePos.y - currentPosition.y;
      const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
      
      // Mouse influence (only when close)
      const influenceRadius = 180; // pixels
      
      let targetX = floatingBaseX;
      let targetY = floatingBaseY;
      
      if (distanceToMouse < influenceRadius) {
        // When mouse is close, target the mouse position instead of floating position
        const influence = Math.max(0, 1 - (distanceToMouse / influenceRadius));
        const followStrength = influence * influence; // quadratic falloff
        
        // Mix between floating position and mouse position based on influence
        targetX = floatingBaseX * (1 - followStrength) + mousePos.x * followStrength;
        targetY = floatingBaseY * (1 - followStrength) + mousePos.y * followStrength;
        
        // Update base position to slowly drift towards mouse area
        const baseShiftStrength = 0.001;
        setBasePosition(prev => ({
          x: prev.x + (mousePos.x - prev.x) * baseShiftStrength,
          y: prev.y + (mousePos.y - prev.y) * baseShiftStrength
        }));
      }
      
      // Smooth movement towards target for first dot
      setCurrentPosition(prev => {
        const smoothing = 0.08;
        const newX = prev.x + (targetX - prev.x) * smoothing;
        const newY = prev.y + (targetY - prev.y) * smoothing;
        return { x: newX, y: newY };
      });

      // Second dot animation (same logic as first dot)
      const floatingBase2X = basePosition2.x + floatX;
      const floatingBase2Y = basePosition2.y + floatY;
      
      // Calculate distance to mouse from second dot current position
      const dx2 = mousePos.x - currentPosition2.x;
      const dy2 = mousePos.y - currentPosition2.y;
      const distanceToMouse2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      
      let target2X = floatingBase2X;
      let target2Y = floatingBase2Y;
      
      if (distanceToMouse2 < influenceRadius) {
        // When mouse is close, target the mouse position instead of floating position
        const influence = Math.max(0, 1 - (distanceToMouse2 / influenceRadius));
        const followStrength = influence * influence; // quadratic falloff
        
        // Mix between floating position and mouse position based on influence
        target2X = floatingBase2X * (1 - followStrength) + mousePos.x * followStrength;
        target2Y = floatingBase2Y * (1 - followStrength) + mousePos.y * followStrength;
        
        // Update base position to slowly drift towards mouse area
        const baseShiftStrength = 0.001;
        setBasePosition2(prev => ({
          x: prev.x + (mousePos.x - prev.x) * baseShiftStrength,
          y: prev.y + (mousePos.y - prev.y) * baseShiftStrength
        }));
      }
      
      // Smooth movement towards target for second dot
      setCurrentPosition2(prev => {
        const smoothing = 0.08;
        const newX = prev.x + (target2X - prev.x) * smoothing;
        const newY = prev.y + (target2Y - prev.y) * smoothing;
        return { x: newX, y: newY };
      });
      
      animationFrame.current = requestAnimationFrame(animate);
    };
    
    animationFrame.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [mousePos, basePosition, currentPosition, basePosition2, currentPosition2]);

  return (
    <>
      {/* Main floating cursor */}
      <div
        className={`absolute pointer-events-none z-[9999] main-cursor ${isOverText ? 'mix-blend-screen' : ''}`}
        style={{
          left: currentPosition.x,
          top: currentPosition.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease-out, opacity 0.3s ease-out',
          opacity: isInHomeSection ? 1 : 0,
        }}
      >
        <svg 
          width="21" 
          height="21" 
          viewBox="0 0 21 21" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="wobble">
              <feTurbulence 
                baseFrequency="0.02" 
                numOctaves="3" 
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.02;0.025;0.02"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="1.2"
              >
                <animate
                  attributeName="scale"
                  values="1.2;1.8;1.2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          </defs>
          <circle 
            cx="10.5" 
            cy="10.5" 
            r="10.5" 
            fill="#EA4335"
            filter="url(#wobble)"
          />
        </svg>
      </div>

      {/* Second floating cursor */}
      <div
        className={`absolute pointer-events-none z-[9998] main-cursor ${isOverText ? 'mix-blend-screen' : ''}`}
        style={{
          left: currentPosition2.x,
          top: currentPosition2.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease-out, opacity 0.3s ease-out',
          opacity: isInHomeSection ? 1 : 0,
        }}
      >
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 18 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="wobble2">
              <feTurbulence 
                baseFrequency="0.025" 
                numOctaves="2" 
                result="noise2"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.025;0.035;0.025"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise2" 
                scale="1.5"
              >
                <animate
                  attributeName="scale"
                  values="1.5;2.2;1.5"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          </defs>
          <circle 
            cx="9" 
            cy="9" 
            r="9" 
            fill="#EA4335"
            filter="url(#wobble2)"
          />
        </svg>
      </div>
    </>
  );
};

export default WaterDropCursor;