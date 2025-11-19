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
            <stop offset="0%" stopColor="#E0F7FA" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#B2EBF2" />
          </linearGradient>
          <radialGradient id="onyxGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
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
            ref={(el) => { stonesRef.current[index] = el as SVGElement; }}
            style={{ 
              transform: 'scale(0)', 
              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
              transformOrigin: 'center',
              opacity: 0
            }}
          >
            {stone.type === 'diamond' && (
              <g>
                {/* Main Body */}
                <path d="M0 -15 L13 0 L0 15 L-13 0 Z" fill="url(#diamondGradient)" stroke="#A0A0A0" strokeWidth="0.5" />
                {/* Facets */}
                <path d="M0 -15 L4 -4 L0 0 L-4 -4 Z" fill="white" opacity="0.6" />
                <path d="M0 15 L4 4 L0 0 L-4 4 Z" fill="#E0F7FA" opacity="0.4" />
                <path d="M13 0 L4 -4 L0 0 L4 4 Z" fill="#B2EBF2" opacity="0.5" />
                <path d="M-13 0 L-4 -4 L0 0 L-4 4 Z" fill="#B2EBF2" opacity="0.5" />
              </g>
            )}
            {stone.type === 'hexagon' && (
              <g>
                {/* Main Body */}
                <path d="M-9 -14 L9 -14 L18 0 L9 14 L-9 14 L-18 0 Z" fill="url(#goldGradient)" stroke="#B8860B" strokeWidth="0.5" />
                {/* Facets */}
                <path d="M-9 -14 L0 0 L9 -14 Z" fill="#FEDC56" opacity="0.4" />
                <path d="M9 -14 L18 0 L0 0 Z" fill="#D4AF37" opacity="0.2" />
                <path d="M18 0 L9 14 L0 0 Z" fill="#996515" opacity="0.3" />
                <path d="M9 14 L-9 14 L0 0 Z" fill="#D4AF37" opacity="0.2" />
                <path d="M-9 14 L-18 0 L0 0 Z" fill="#996515" opacity="0.3" />
                <path d="M-18 0 L-9 -14 L0 0 Z" fill="#FEDC56" opacity="0.4" />
              </g>
            )}
            {stone.type === 'circle' && (
              <g>
                {/* Onyx Body */}
                <circle r="11" fill="url(#onyxGradient)" stroke="url(#goldGradient)" strokeWidth="1.5" />
                {/* Specular Highlight */}
                <ellipse cx="-4" cy="-4" rx="3" ry="2" transform="rotate(-45)" fill="white" opacity="0.3" />
              </g>
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
