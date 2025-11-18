'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const StorytellingSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=85&w=1000&h=1400&fit=crop&auto=format',
      step: 'Step 1',
      heading: 'WELCOME',
      text: "A person's character can be sensed from a mere handshake. The same goes for entering a hotel lobby. As an idea incubator, La Bottega searches for the necessary elements to create an experiential path for the guest.",
      hasChevron: false,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1000&h=1400&fit=crop&auto=format',
      step: 'Step 2',
      heading: 'CONCEPT MOOD',
      text: 'Hotels can choose to offer different comforts, and these are the inspirational ingredients that La Bottega combines to create projects that reflect the message of "hospitality" with which the hotel wants to welcome its customers.',
      hasChevron: false,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=85&w=1000&h=1400&fit=crop&auto=format',
      step: 'Step 3',
      heading: 'DESIGN',
      text: 'Every detail is crafted with precision and care, creating spaces that tell stories and evoke emotions in the hearts of guests.',
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
      className="w-full bg-white"
      style={{
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
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            fontStyle: 'italic',
            color: '#1A1A1A',
            marginBottom: '0.2em',
          }}
        >
          We are the
        </div>
        <div
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#1A1A1A',
            lineHeight: '1',
          }}
        >
          STORYTELLERS
        </div>
        <div
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            fontStyle: 'italic',
            color: '#1A1A1A',
            marginTop: '0.2em',
          }}
        >
          of the HOTELLERIE
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
            fontFamily: 'var(--font-playfair)',
            fontSize: '4rem',
            fontWeight: 400,
            color: '#1A1A1A',
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

        {/* Floating FAB */}
        <button
          aria-label="Contact us"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            backgroundColor: '#E0E0E0',
            borderRadius: '50%',
            zIndex: 100,
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D0D0D0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E0E0E0';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </button>

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
                background: '#F8F8F8',
                padding: '3.5rem 3rem',
                boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                zIndex: 20,
                borderRadius: '2px',
                border: '1px solid #E8E8E8',
              }}
            >
              {/* Meta Label */}
              <div
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                  letterSpacing: '3px',
                  color: '#999999',
                  marginBottom: '1.5rem',
                  fontWeight: 600,
                }}
              >
                {slides[currentSlide].step}
              </div>

              {/* Heading */}
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  fontSize: '2.75rem',
                  color: '#1A1A1A',
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
                  backgroundColor: '#D4AF37',
                  marginBottom: '2.5rem',
                }}
              />

              {/* Body Text */}
              <p
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontSize: '1rem',
                  lineHeight: '1.9',
                  color: '#666666',
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
