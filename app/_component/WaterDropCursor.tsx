'use client';

import React, { useEffect, useRef, useState } from 'react';

const WaterDropCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [basePosition, setBasePosition] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);
  const animationFrame = useRef<number>();
  const startTime = useRef<number>(Date.now());

  // Initialize base position to left side of screen
  useEffect(() => {
    const initializePosition = () => {
      const initialX = window.innerWidth * 0.2; // 20% from left (more to the left)
      const initialY = (window.innerHeight * 2) / 3; // 1/3 from bottom
      setBasePosition({ x: initialX, y: initialY });
      setCurrentPosition({ x: initialX, y: initialY });
    };

    // Initialize immediately and on resize
    initializePosition();
    window.addEventListener('resize', initializePosition);
    return () => window.removeEventListener('resize', initializePosition);
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
      
      // Smooth movement towards target
      setCurrentPosition(prev => {
        const smoothing = 0.08;
        const newX = prev.x + (targetX - prev.x) * smoothing;
        const newY = prev.y + (targetY - prev.y) * smoothing;
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
  }, [mousePos, basePosition, currentPosition]);

  return (
    <>
      {/* Main floating cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] main-cursor ${isOverText ? 'mix-blend-screen' : ''}`}
        style={{
          left: currentPosition.x,
          top: currentPosition.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease-out',
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
    </>
  );
};

export default WaterDropCursor;