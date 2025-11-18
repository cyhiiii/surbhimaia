'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PremiumCollections: React.FC = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#E8E6E1',
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
            color: '#9B9B9B',
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
            color: '#3A3A3A',
            letterSpacing: '-0.8px',
            margin: 0,
            marginBottom: '24px',
            maxWidth: '650px',
          }}
        >
          Illuminated Artistry
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
            color: '#3A3A3A',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderBottom: '1.5px solid #3A3A3A',
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
            }}
          >
            <Image
              id="image_landscape"
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=90&w=1600&h=1040&fit=crop&auto=format"
              alt="Luxurious living room interior with beige sofa, ornate columns, elegant curtains, and framed artwork"
              width={1010}
              height={656}
              className="w-full h-auto block"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                display: 'block',
                maxHeight: '480px',
              }}
              unoptimized
            />
          </figure>

          {/* Portrait Image - Ornate Black Wood Detail */}
          <figure
            className="m-0 overflow-hidden"
            style={{
              gridColumn: '2',
              position: 'relative',
              width: '100%',
            }}
          >
            <Image
              id="image_portrait"
              src="https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=90&w=800&h=1230&fit=crop&auto=format"
              alt="Close-up detail of ornate black lacquered wood with intricate carved silver baroque pattern"
              width={435}
              height={669}
              className="w-full h-auto block"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                maxHeight: '480px',
              }}
              unoptimized
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default PremiumCollections;
