'use client';

import React from 'react';
import Image from 'next/image';

export default function ProcessSection() {
  return (
    <section
      style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        width: '100%',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        gap: '60px',
      }}
    >
      {/* Text Content Wrapper */}
      <div
        style={{
          flex: 1,
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '32px',
          paddingRight: '40px',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '40px',
            lineHeight: '1.2',
            fontWeight: 400,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0',
          }}
        >
          THE MAIA PROCESS — FROM VISION TO REALITY
        </h2>

        {/* Body Text 1 */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '16px',
            lineHeight: '1.6',
            fontWeight: 300,
            color: '#E0E0E0',
            textAlign: 'left',
            margin: 0,
          }}
        >
          Our journey begins with inspiration and evolves through concept sketches to three-dimensional models. Each creation is a collaborative masterpiece between client vision and master artisan craftsmanship.
        </p>

        {/* Body Text 2 */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '16px',
            lineHeight: '1.6',
            fontWeight: 300,
            color: '#E0E0E0',
            textAlign: 'left',
            margin: 0,
          }}
        >
          From consultation to visualization, material selection to skilled production, every step ensures your bespoke luxury fixtures achieve incomparable perfection. We don&apos;t just create products —we craft extravagant works of art.
        </p>

        {/* CTA Button */}
        <button
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #FFFFFF',
            color: '#FFFFFF',
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            padding: '14px 24px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '16px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          DISCOVER OUR PROCESS →
        </button>
      </div>

      {/* Image Wrapper */}
      <div
        style={{
          flex: 1,
          width: '50%',
          maxWidth: '700px',
          overflow: 'hidden',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=1200&h=900&fit=crop&q=80"
          alt="Artisan hands carving a green malachite stone on a grinding wheel"
          width={660}
          height={500}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
          unoptimized
        />
      </div>
    </section>
  );
}
