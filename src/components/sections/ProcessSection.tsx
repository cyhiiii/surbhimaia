'use client';

import React from 'react';
import Image from 'next/image';

export default function ProcessSection() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        color: '#000000',
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
            fontFamily: 'var(--font-montserrat)',
            fontSize: '40px',
            lineHeight: '1.2',
            fontWeight: 700,
            color: '#000000',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0',
          }}
        >
          THE MAIA BESPOKE PROCESS — FROM VISION TO REALITY
        </h2>

        {/* Body Text 1 */}
        <p
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '16px',
            lineHeight: '1.6',
            fontWeight: 300,
            color: '#333333',
            textAlign: 'left',
            margin: 0,
          }}
        >
          Our journey begins with an initial consultation to understand your vision, followed by inspiration-driven concept sketches that evolve into precise three-dimensional models. Each creation is a collaborative masterpiece between your vision and our master artisan craftsmanship.
        </p>

        {/* Body Text 2 */}
        <p
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '16px',
            lineHeight: '1.6',
            fontWeight: 300,
            color: '#333333',
            textAlign: 'left',
            margin: 0,
          }}
        >
          From consultation to visualization tools, material selection to skilled production, culminating in final quality checks and installation—every step ensures your bespoke stone furniture achieves incomparable perfection. We don&apos;t just create products, we craft aesthetic and desirable works of art.
        </p>

        {/* CTA Button */}
        <button
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #000000',
            color: '#000000',
            fontFamily: 'var(--font-montserrat)',
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
            e.currentTarget.style.backgroundColor = '#000000';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.borderColor = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#000000';
            e.currentTarget.style.borderColor = '#000000';
          }}
        >
          EXPLORE OUR PROCESS →
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
          src="/assets/India.png"
          alt="MAIA Bespoke craftsmanship in India"
          width={660}
          height={500}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
}
