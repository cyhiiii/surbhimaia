'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PremiumCollections: React.FC = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '60px',
        paddingBottom: '60px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        id="section_container"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: '42px',
          paddingRight: '42px',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <span
          id="eyebrow"
          className="block font-sans"
          style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '3px',
            lineHeight: '14px',
            color: '#000000',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          PREMIUM COLLECTIONS
        </span>

        {/* Heading */}
        <h2
          id="heading"
          className="font-serif"
          style={{
            fontSize: '48px',
            fontWeight: 400,
            lineHeight: '1.15',
            color: '#000000',
            letterSpacing: '-0.8px',
            margin: 0,
            marginBottom: '24px',
            maxWidth: '650px',
          }}
        >
          Bespoke Stone Collections
        </h2>

        {/* CTA Link */}
        <Link
          id="cta_link"
          href="#discover"
          className="inline-block no-underline font-sans"
          style={{
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '2.2px',
            color: '#000000',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderBottom: '1.5px solid #000000',
            paddingBottom: '4px',
            marginBottom: '48px',
            display: 'inline-block',
          }}
        >
          DISCOVER MORE
        </Link>

        {/* Gallery Grid */}
        <div
          id="gallery_grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '68.5% 29.5%',
            columnGap: '2%',
            alignItems: 'start',
            width: '100%',
          }}
        >
          {/* Landscape Image - Living Room Interior */}
          <figure
            className="m-0 overflow-hidden"
            style={{
              gridColumn: '1',
              position: 'relative',
              width: '100%',
              height: '656px',
            }}
          >
            <Image
              id="image_landscape"
              src="/assets/MAIA.png"
              alt="MAIA Bespoke stone furniture collection"
              width={1010}
              height={656}
              className="w-full h-full block"
              style={{
                objectFit: 'contain',
                objectPosition: 'center center',
                display: 'block',
              }}
            />
          </figure>

          {/* Portrait Video - MAIA Process */}
          <figure
            className="m-0 overflow-hidden"
            style={{
              gridColumn: '2',
              position: 'relative',
              width: '100%',
              height: '656px',
            }}
          >
            <video
              id="video_portrait"
              src="/assets/MAIA.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full block"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                display: 'block',
              }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default PremiumCollections;
