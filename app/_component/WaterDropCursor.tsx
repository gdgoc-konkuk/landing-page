'use client';

import { useMousePosition } from '@/hooks/useMousePost';
import { Dot } from '@/lib/Dot';
import React, { useEffect, useRef } from 'react';

const WaterDropCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useMousePosition();
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameId = useRef<number>();

  const mousePosRef = useRef(mousePos);

  useEffect(() => {
    mousePosRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    dotsRef.current = [
      new Dot(window.innerWidth * 0.2, window.innerHeight * 0.6, 8, '#EA4335'),
      new Dot(window.innerWidth * 0.7, window.innerHeight * 0.3, 10, '#EA4335'),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        dot.update(mousePosRef.current.x, mousePosRef.current.y);
        dot.draw(ctx);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default WaterDropCursor;
