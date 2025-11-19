'use client';

import React from 'react';

const materials = [
  {
    id: 1,
    name: 'MALACHITE',
    origin: 'The Congo',
    description: 'Deep emerald bands representing transformation and positive change.',
    // CSS pattern to simulate banded malachite
    background: 'radial-gradient(circle at 50% 50%, #1a4d2e 0%, #0f2b1a 40%, #1a4d2e 60%, #000000 100%)',
    boxShadow: '0px 10px 30px rgba(26, 77, 46, 0.3)',
  },
  {
    id: 2,
    name: 'LAPIS LAZULI',
    origin: 'Afghanistan',
    description: 'Celestial blue with golden pyrite flecks, symbolizing wisdom and truth.',
    // Deep blue with noise
    background: 'radial-gradient(circle at 30% 30%, #1e3a8a, #172554)',
    boxShadow: '0px 10px 30px rgba(30, 58, 138, 0.3)',
  },
  {
    id: 3,
    name: 'WHITE ONYX',
    origin: 'Iran',
    description: 'Translucent purity that captures light, bringing serenity to any space.',
    // Soft white/grey cloud
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  },
  {
    id: 4,
    name: 'TIGER EYE',
    origin: 'South Africa',
    description: 'Chatoyant golden bands that shift with the light, grounding and protective.',
    // Banded brown/gold
    background: 'linear-gradient(45deg, #451a03 0%, #b45309 25%, #78350f 50%, #b45309 75%, #451a03 100%)',
    boxShadow: '0px 10px 30px rgba(180, 83, 9, 0.3)',
  },
];

const MaterialsSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        color: '#000000',
        width: '100%',
        padding: '100px 40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '40px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
            color: '#000000',
          }}
        >
          The Palette of Nature
        </h2>
        <div
          style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#000000',
            margin: '0 auto',
          }}
        />
      </div>

      {/* Materials Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {materials.map((stone) => (
          <div
            key={stone.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Stone Swatch */}
            <div
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: stone.background,
                marginBottom: '32px',
                boxShadow: stone.boxShadow,
                position: 'relative',
                transition: 'transform 0.5s ease',
                cursor: 'pointer',
              }}
              className="hover:scale-105"
            >
              {/* Gloss/Shine Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
                }}
              />
            </div>

            {/* Content */}
            <h3
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '20px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              {stone.name}
            </h3>
            
            <p
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#D4AF37', // Gold accent
                marginBottom: '16px',
              }}
            >
              {stone.origin}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                lineHeight: '1.6',
                fontWeight: 300,
                color: '#666666',
                maxWidth: '280px',
              }}
            >
              {stone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialsSection;
