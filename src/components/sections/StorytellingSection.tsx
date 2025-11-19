'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const StorytellingSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<'left' | 'right' | 'default'>('default');
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMouseX = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Update cursor when slide changes
  useEffect(() => {
    if (lastMouseX.current !== null && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = lastMouseX.current - rect.left;
      const isLeft = x < rect.width / 2;

      if (isLeft) {
        setCursorMode(currentSlide > 0 ? 'left' : 'default');
      } else {
        setCursorMode(currentSlide < slides.length - 1 ? 'right' : 'default');
      }
    }
  }, [currentSlide]);

  const slides = [
    {
      id: 1,
      image: '/assets/P.jpeg',
      step: 'Step 1',
      heading: 'CONSULTATION',
      text: "Your journey begins with an initial consultation where we understand your needs, preferences, and vision. This collaborative approach ensures we capture the essence of what makes your space uniquely yours, mitigating risk and ensuring the final product perfectly fits its intended environment.",
      hasChevron: false,
    },
    {
      id: 2,
      image: '/assets/Pi.jpeg',
      step: 'Step 2',
      heading: 'VISUALIZATION',
      text: 'From inspiration-driven concept sketches to detailed three-dimensional models, we bring your vision to life before production begins. These visualization tools are crucial for high-cost, one-of-a-kind projects, offering you complete confidence in the final piece.',
      hasChevron: false,
    },
    {
      id: 3,
      image: '/assets/NJP.jpg',
      step: 'Step 3',
      heading: 'CREATION',
      text: 'Skilled artisans meticulously craft your bespoke stone furniture using carefully selected premium materials. Every detail receives precision and care, culminating in rigorous quality checks and professional installation—transforming raw stone into an incomparable work of art.',
      hasChevron: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    lastMouseX.current = e.clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isLeft = x < rect.width / 2;

    if (isLeft) {
      setCursorMode(currentSlide > 0 ? 'left' : 'default');
    } else {
      setCursorMode(currentSlide < slides.length - 1 ? 'right' : 'default');
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isLeft = x < rect.width / 2;

    if (isLeft) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const getCursorStyle = () => {
    // Using 32x32 SVGs for better cross-browser/OS compatibility
    const leftSvg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15" stroke="black" stroke-width="1.5" fill="white" fill-opacity="0.9"/><path d="M19 10L11 16L19 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const rightSvg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15" stroke="black" stroke-width="1.5" fill="white" fill-opacity="0.9"/><path d="M13 10L21 16L13 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    
    const leftCursor = `url("data:image/svg+xml,${encodeURIComponent(leftSvg)}") 16 16, pointer`;
    const rightCursor = `url("data:image/svg+xml,${encodeURIComponent(rightSvg)}") 16 16, pointer`;
    
    if (cursorMode === 'left') return leftCursor;
    if (cursorMode === 'right') return rightCursor;
    return 'default';
  };

  return (
    <section
      className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center p-[clamp(2rem,5vw,5rem)] z-10"
    >
      {/* Hero Header */}
      <div 
        ref={headerRef}
        className="text-center mb-[clamp(3rem,5vh,5rem)] z-10 relative"
      >
        <div
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            fontStyle: 'italic',
            color: '#000000',
            marginBottom: '0.2em',
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          "Some creations are imagined.
        </div>
        <div
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#000000',
            lineHeight: '1',
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s',
          }}
        >
          OURS ARE BUILT
        </div>
        <div
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            fontStyle: 'italic',
            color: '#000000',
            marginTop: '0.2em',
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 1.6s, transform 0.8s ease-out 1.6s',
          }}
        >
          from vision."
        </div>
      </div>

      {/* Carousel Section */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursorMode('default')}
        onClick={handleContainerClick}
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
          cursor: getCursorStyle(),
        }}
      >
        {/* Pagination Counter */}
        <div
          style={{
            position: 'absolute',
            left: 'calc(clamp(2rem, 5vw, 5rem) + 1.5rem)',
            bottom: '10%',
            fontFamily: 'var(--font-montserrat)',
            fontSize: '4rem',
            fontWeight: 400,
            color: '#000000',
            zIndex: 1,
          }}
        >
          {currentSlide + 1}/{slides.length}
        </div>

        {/* Previous Arrow removed */}
        {/* Next Arrow removed */}

        {/* Content Wrapper (No Rotation) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1200px',
            position: 'relative',
          }}
        >
          {/* Slide Container */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Main Image */}
            <div
              style={{
                position: 'relative',
                width: 'clamp(550px, 50vw, 800px)',
                height: 'clamp(400px, 45vh, 600px)',
                zIndex: 10,
                marginLeft: '-3%',
              }}
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].heading}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.2)',
                }}
                unoptimized
              />
            </div>

            {/* Content Card */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(100% - 150px)',
                top: '10%',
                width: 'clamp(450px, 38vw, 600px)',
                minHeight: 'clamp(350px, 40vh, 550px)',
                background: '#FFFFFF',
                padding: '3.5rem 3rem',
                boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                zIndex: 20,
                borderRadius: '2px',
                border: '2px solid #000000',
              }}
            >
              {/* Meta Label */}
              <div
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                  letterSpacing: '3px',
                  color: '#666666',
                  marginBottom: '1.5rem',
                  fontWeight: 600,
                }}
              >
                {slides[currentSlide].step}
              </div>

              {/* Heading */}
              <h3
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 700,
                  fontSize: '2.75rem',
                  color: '#000000',
                  margin: 0,
                  marginBottom: '2rem',
                  lineHeight: '1.1',
                  textTransform: 'uppercase',
                }}
              >
                {slides[currentSlide].heading}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#000000',
                  marginBottom: '2.5rem',
                }}
              />

              {/* Body Text */}
              <p
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '1rem',
                  lineHeight: '1.9',
                  color: '#333333',
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {slides[currentSlide].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
