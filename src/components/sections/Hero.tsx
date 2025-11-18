'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <>
      {/* hero-background-container: z-index 0 */}
      <div
        id="hero-background-container"
        className="absolute top-0 left-0 overflow-hidden"
        style={{
          width: '1440px',
          height: '900px',
          backgroundColor: '#381E55',
          zIndex: 0,
        }}
      >
        <Image
          id="hero-image"
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=90&w=2880&h=1800&fit=crop&auto=format"
          alt="Messika silver bangle with three moving diamonds against glossy purple spherical balloons"
          width={1440}
          height={900}
          priority
          quality={95}
          className="w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          unoptimized
        />
      </div>

      {/* hero-content-wrapper: z-index 5 */}
      <section
        id="hero-content-wrapper"
        className="absolute left-0 right-0 flex flex-col items-center justify-end"
        style={{
          bottom: '80px',
          zIndex: 5,
        }}
      >
        <h2
          id="hero-title"
          className="text-white uppercase font-oswald m-0"
          style={{
            fontSize: '42px',
            lineHeight: '48px',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
            marginBottom: '16px',
          }}
        >
          GIFT SELECTION
        </h2>

        <Link
          id="hero-cta"
          href="#discover"
          className="text-white uppercase font-montserrat no-underline"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 500,
            letterSpacing: '1.0px',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            cursor: 'pointer',
            marginBottom: '40px',
          }}
        >
          DISCOVER
        </Link>

        <div
          id="hero-scroll-dots"
          className="flex flex-col items-center"
          style={{ gap: '4px' }}
          role="presentation"
          aria-hidden="true"
        >
          <span
            id="dot-1"
            className="bg-white rounded-full"
            style={{
              width: '3px',
              height: '3px',
              opacity: 1,
            }}
          />
          <span
            id="dot-2"
            className="bg-white rounded-full"
            style={{
              width: '3px',
              height: '3px',
              opacity: 1,
            }}
          />
          <span
            id="dot-3"
            className="bg-white rounded-full"
            style={{
              width: '3px',
              height: '3px',
              opacity: 1,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
