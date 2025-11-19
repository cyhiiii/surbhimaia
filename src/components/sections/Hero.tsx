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
          src="https://res.cloudinary.com/dr0yyey6x/video/upload/v1763565775/14562815_1920_1080_25fps_owv7fc.mp4"
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
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dot-flow {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}} />
        <div
          id="hero-scroll-dots"
          className="flex flex-col items-center"
          style={{ gap: '12px' }}
          role="presentation"
          aria-hidden="true"
        >
          <span
            id="dot-1"
            className="bg-white rounded-full"
            style={{
              width: '6px',
              height: '6px',
              animation: 'dot-flow 1.5s ease-in-out infinite',
              animationDelay: '0s',
            }}
          />
          <span
            id="dot-2"
            className="bg-white rounded-full"
            style={{
              width: '6px',
              height: '6px',
              animation: 'dot-flow 1.5s ease-in-out infinite',
              animationDelay: '0.3s',
            }}
          />
          <span
            id="dot-3"
            className="bg-white rounded-full"
            style={{
              width: '6px',
              height: '6px',
              animation: 'dot-flow 1.5s ease-in-out infinite',
              animationDelay: '0.6s',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
