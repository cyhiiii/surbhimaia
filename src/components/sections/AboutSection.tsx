'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      style={{
        color: '#000000',
        width: '100%',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        gap: '60px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Image Wrapper - Left Side */}
      <div
        style={{
          flex: 1,
          width: '50%',
          maxWidth: '600px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '600px' }}>
             <Image
            src="/assets/AKHIL BAKHSHI_149.JPG"
            alt="Surabhi Swarup"
            fill
            style={{
                objectFit: 'cover',
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.2)',
            }}
            />
        </div>
      </div>

      {/* Text Content Wrapper - Right Side */}
      <div
        style={{
          flex: 1,
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '24px',
          paddingLeft: '40px',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '32px',
            lineHeight: '1.2',
            fontWeight: 700,
            color: '#000000',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '8px',
          }}
        >
          Surabhi Swarup
        </h2>
        <h3
            style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '16px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#666666',
                marginTop: '-16px',
                marginBottom: '16px',
            }}
        >
            Founder and Director
        </h3>

        {/* Body Text */}
        <p
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '15px',
            lineHeight: '1.8',
            fontWeight: 300,
            color: '#333333',
            textAlign: 'justify',
            margin: 0,
          }}
        >
          Surabhi Swaroop emerges as a luminary lapidarist and artisan extraordinaire in a realm where artistry intertwines with mastery. Embarking on her odyssey alongside MAIA over a decade past, she weaves enchantment with her hallmark designs, capturing light and radiance to imbue each creation with a timeless allure, both elegant and refined.
        </p>
        
        <p
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '15px',
            lineHeight: '1.8',
            fontWeight: 300,
            color: '#333333',
            textAlign: 'justify',
            margin: 0,
          }}
        >
          Commencing her creative voyage in the realm of Ceramics, she swiftly transitioned to the realm of semiprecious stones. Harmonizing tradition with contemporary currents, she curates moments of opulent artistry, her ardor for lapidary spanning a vast expanse. Renowned for her discerning eye and commitment to precision, she is the esteemed guardian of the intricate Pietra Dura embellishments adorning the Taj Mahal.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-montserrat)',
            fontSize: '15px',
            lineHeight: '1.8',
            fontWeight: 300,
            color: '#333333',
            textAlign: 'justify',
            margin: 0,
          }}
        >
          Within the realm of Bespoke luxury, Surabhi&apos;s designs transcend into bespoke masterpieces for a discerning few. Venturing beyond lapidary, she orchestrates exquisite creations with gemstones and iridescent mother of pearl, each piece a testament to her unwavering dedication to unrivalled magnificence. Driven by an unyielding passion for her craft, Surabhi&apos;s creations stand as paragons of artistry, each a unique and exclusive masterpiece crafted with meticulous devotion to detail and exactitude.
        </p>

      </div>
    </section>
  );
}
