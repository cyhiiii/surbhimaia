'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const StorytellingSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="w-full"
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(2rem, 5vw, 5rem) clamp(2rem, 5vw, 5rem)',
      }}
    >
      {/* Hero Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 'clamp(3rem, 5vh, 5rem)',
          zIndex: 10,
          position: 'relative',
        }}
      >
                <div
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            fontStyle: 'italic',
            color: '#000000',
            marginBottom: '0.2em',
          }}
        >
          Some creations are imagined.
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
          }}
        >
          from vision.
        </div>
      </div>

      {/* Carousel Section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
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

        {/* Previous Arrow (visible on steps 2, 3) */}
        {currentSlide >= 1 && (
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              left: 'calc(clamp(2rem, 5vw, 5rem) - 20px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              border: '1px solid #E5E5E5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              background: '#F0F0F0',
              zIndex: 50,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E0E0E0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F0F0F0';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Next Arrow (visible on steps 1, 2) */}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            style={{
              position: 'absolute',
              right: 'calc(clamp(2rem, 5vw, 5rem) - 20px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              border: '1px solid #E5E5E5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              background: '#F0F0F0',
              zIndex: 50,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E0E0E0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F0F0F0';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}

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
