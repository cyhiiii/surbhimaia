'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      {/* hero-background-container: z-index 0 */}
      <div
        id="hero-background-container"
        className="absolute top-0 left-0 overflow-hidden"
        style={{
          width: '100vw',
          height: '900px',
          backgroundColor: '#381E55',
          zIndex: 0,
        }}
      >
        <video
          id="hero-video"
          src="https://res.cloudinary.com/dr0yyey6x/video/upload/q_auto,f_auto/tree_01_uqlkgl.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
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
        <div
          id="hero-scroll-dots"
          className="flex flex-col items-center"
          style={{ gap: '8px' }}
          role="presentation"
          aria-hidden="true"
        >
          <span
            id="dot-1"
            className="bg-white rounded-full animate-pulse"
            style={{
              width: '8px',
              height: '8px',
              opacity: 1,
              animationDelay: '0s',
            }}
          />
          <span
            id="dot-2"
            className="bg-white rounded-full animate-pulse"
            style={{
              width: '8px',
              height: '8px',
              opacity: 1,
              animationDelay: '0.2s',
            }}
          />
          <span
            id="dot-3"
            className="bg-white rounded-full animate-pulse"
            style={{
              width: '8px',
              height: '8px',
              opacity: 1,
              animationDelay: '0.4s',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
