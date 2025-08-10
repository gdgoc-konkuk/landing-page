'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Drop {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  merging: boolean;
}

const WaterDropCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [drops, setDrops] = useState<Drop[]>([]);
  const [isOverText, setIsOverText] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const dropIdCounter = useRef(0);
  const animationFrame = useRef<number>();
  const lastDropTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate velocity
      const deltaX = newX - lastMousePos.current.x;
      const deltaY = newY - lastMousePos.current.y;
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      setVelocity({ x: deltaX, y: deltaY });
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
      
      // Create water drops when moving fast (less frequently)
      const currentTime = Date.now();
      if (speed > 30 && currentTime - lastDropTime.current > 100) {
        // Create a drop that trails behind
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(speed * 1.5, 80);
        
        const newDrop: Drop = {
          id: dropIdCounter.current++,
          x: lastMousePos.current.x - Math.cos(angle) * distance,
          y: lastMousePos.current.y - Math.sin(angle) * distance,
          targetX: newX,
          targetY: newY,
          size: Math.min(8, 4 + speed * 0.08),
          opacity: 1,
          merging: true,
        };
        setDrops(prev => [...prev, newDrop]);
        lastDropTime.current = currentTime;
      }
      
      lastMousePos.current = { x: newX, y: newY };
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate merging drops
  useEffect(() => {
    const animate = () => {
      let shouldGrow = false;
      
      setDrops(prevDrops => 
        prevDrops
          .map(drop => {
            if (drop.merging) {
              // Calculate distance to target
              const dx = drop.targetX - drop.x;
              const dy = drop.targetY - drop.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // If very close, trigger merge animation
              if (distance < 1) {
                shouldGrow = true;
                return { ...drop, opacity: 0 };
              }
              
              // Dynamic spring force based on distance
              // Starts slow, gets faster as it approaches
              const normalizedDistance = Math.min(distance / 100, 1);
              const springForce = 0.05 + (1 - normalizedDistance) * 0.25; // 0.05 to 0.3
              
              // Update position with acceleration
              const newX = drop.x + dx * springForce;
              const newY = drop.y + dy * springForce;
              
              // Size changes as it gets closer
              const sizeMultiplier = 0.5 + normalizedDistance * 0.5; // Gets smaller as it approaches
              
              return {
                ...drop,
                x: newX,
                y: newY,
                targetX: mousePos.x,
                targetY: mousePos.y,
                size: drop.size * sizeMultiplier,
                opacity: Math.min(1, 0.3 + normalizedDistance * 0.7), // Fades as it gets closer
              };
            }
            return drop;
          })
          .filter(drop => drop.opacity > 0)
      );
      
      // Trigger merge animation on main cursor
      if (shouldGrow) {
        const mainCursor = document.querySelector('.main-cursor');
        if (mainCursor) {
          mainCursor.classList.add('merge-pulse');
          setTimeout(() => {
            mainCursor.classList.remove('merge-pulse');
          }, 300);
        }
      }
      
      animationFrame.current = requestAnimationFrame(animate);
    };
    
    animationFrame.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [mousePos]);

  // Calculate stretch based on velocity
  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
  const stretchX = Math.min(1.5, 1 + speed * 0.01);
  const stretchY = Math.min(2, 1 + speed * 0.02);
  const rotation = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI) + 90;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] main-cursor ${isOverText ? 'mix-blend-screen' : ''}`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scaleX(${stretchX}) scaleY(${stretchY})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <svg 
          width="21" 
          height="21" 
          viewBox="0 0 21 21" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-wobble"
        >
          <circle cx="10.5" cy="10.5" r="10.5" fill="#EA4335"/>
        </svg>
      </div>

      {/* Falling drops */}
      {drops.map(drop => (
        <div
          key={drop.id}
          className={`fixed pointer-events-none z-[9998] ${isOverText ? 'mix-blend-screen' : ''}`}
          style={{
            left: drop.x,
            top: drop.y,
            transform: 'translate(-50%, -50%)',
            opacity: drop.opacity,
          }}
        >
          <svg 
            width={drop.size * 2} 
            height={drop.size * 2} 
            viewBox="0 0 21 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#EA4335"/>
          </svg>
        </div>
      ))}
    </>
  );
};

export default WaterDropCursor;