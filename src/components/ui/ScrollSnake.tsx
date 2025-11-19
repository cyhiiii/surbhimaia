'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Stone {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'diamond' | 'hexagon' | 'circle';
  progressTrigger: number;
}

const ScrollSnake: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stonesRef = useRef<(SVGElement | null)[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [pathString, setPathString] = useState('');
  const [stones, setStones] = useState<Stone[]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
        
        // Generate wavy path
        const centerX = offsetWidth / 2;
        const waveWidth = 80; // Slightly wider for elegance
        const waveHeight = 400; // Longer waves
        
        let d = `M ${centerX} 0`;
        const steps = Math.ceil(offsetHeight / waveHeight);
        const newStones: Stone[] = [];
        
        for (let i = 0; i < steps; i++) {
          const startY = i * waveHeight;
          const endY = (i + 1) * waveHeight;
          
          // First half of wave (going left)
          d += ` C ${centerX - waveWidth} ${startY + waveHeight * 0.25}, ${centerX - waveWidth} ${startY + waveHeight * 0.25}, ${centerX} ${startY + waveHeight * 0.5}`;
          
          // Stone on the left curve
          newStones.push({
            x: centerX - waveWidth * 0.55,
            y: startY + waveHeight * 0.25,
            rotation: -15 + Math.random() * 30,
            scale: 0.8 + Math.random() * 0.4,
            type: i % 3 === 0 ? 'diamond' : i % 3 === 1 ? 'hexagon' : 'circle',
            progressTrigger: (startY + waveHeight * 0.25) / offsetHeight
          });

          // Second half of wave (going right)
          d += ` C ${centerX + waveWidth} ${startY + waveHeight * 0.75}, ${centerX + waveWidth} ${startY + waveHeight * 0.75}, ${centerX} ${endY}`;

          // Stone on the right curve
          newStones.push({
            x: centerX + waveWidth * 0.55,
            y: startY + waveHeight * 0.75,
            rotation: -15 + Math.random() * 30,
            scale: 0.8 + Math.random() * 0.4,
            type: i % 3 === 1 ? 'diamond' : i % 3 === 2 ? 'hexagon' : 'circle',
            progressTrigger: (startY + waveHeight * 0.75) / offsetHeight
          });
        }
        
        setPathString(d);
        setStones(newStones);
        // Reset refs array
        stonesRef.current = stonesRef.current.slice(0, newStones.length);
      }
    };

    updateDimensions();
    
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pathRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startOffset = windowHeight * 0.6; // Start drawing a bit earlier
      const scrollY = window.scrollY;
      const containerTop = containerRect.top + scrollY;
      const containerHeight = containerRect.height;
      
      const relativeScroll = scrollY + startOffset - containerTop;
      const progress = Math.max(0, Math.min(1, relativeScroll / containerHeight));
      
      const pathLength = pathRef.current.getTotalLength();
      const drawLength = pathLength * progress;
      
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength - drawLength}`;

      // Animate stones
      stones.forEach((stone, i) => {
        const el = stonesRef.current[i];
        if (el) {
          // Show stone slightly before the line reaches it visually
          if (progress >= stone.progressTrigger - 0.02) {
            el.style.transform = `scale(${stone.scale})`;
            el.style.opacity = '1';
          } else {
            el.style.transform = `scale(0)`;
            el.style.opacity = '0';
          }
        }
      });
    };

    // Initialize
    if (pathRef.current) {
       const len = pathRef.current.getTotalLength();
       pathRef.current.style.strokeDasharray = `${len}`;
       pathRef.current.style.strokeDashoffset = `${len}`;
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dimensions, pathString, stones]);

  return (
    <div 
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEDC56" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>
          <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F0F0F0" />
            <stop offset="100%" stopColor="#D9D9D9" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Stones */}
        {stones.map((stone, index) => (
          <g 
            key={index} 
            transform={`translate(${stone.x}, ${stone.y}) rotate(${stone.rotation})`}
          >
            {stone.type === 'diamond' && (
              <path
                ref={(el) => { stonesRef.current[index] = el; }}
                d="M0 -14 L12 0 L0 14 L-12 0 Z"
                fill="url(#diamondGradient)"
                stroke="#D4AF37"
                strokeWidth="0.5"
                style={{ 
                  transform: 'scale(0)', 
                  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                  transformOrigin: 'center',
                  opacity: 0
                }}
              />
            )}
            {stone.type === 'hexagon' && (
              <path
                ref={(el) => { stonesRef.current[index] = el; }}
                d="M-8 -12 L8 -12 L16 0 L8 12 L-8 12 L-16 0 Z"
                fill="url(#goldGradient)"
                stroke="#FFFFFF"
                strokeWidth="0.5"
                style={{ 
                  transform: 'scale(0)', 
                  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                  transformOrigin: 'center',
                  opacity: 0
                }}
              />
            )}
            {stone.type === 'circle' && (
              <circle
                ref={(el) => { stonesRef.current[index] = el; }}
                r="10"
                fill="#1A1A1A"
                stroke="url(#goldGradient)"
                strokeWidth="2"
                style={{ 
                  transform: 'scale(0)', 
                  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                  transformOrigin: 'center',
                  opacity: 0
                }}
              />
            )}
          </g>
        ))}
        
        {/* Gold Thread */}
        <path
          ref={pathRef}
          d={pathString}
          stroke="url(#goldGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{
            transition: 'stroke-dashoffset 0.1s linear',
            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))'
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollSnake;
