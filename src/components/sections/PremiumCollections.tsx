'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PremiumCollections: React.FC = () => {
  return (
    <section
      className="w-full bg-white pt-[60px] pb-[60px] min-h-screen flex items-center"
    >
      <div
        id="section_container"
        className="max-w-[1440px] mx-auto px-[42px] w-full box-border"
      >
        {/* Eyebrow */}
        <span
          id="eyebrow"
          className="block font-sans text-[10px] font-medium tracking-[3px] leading-[14px] text-black uppercase mb-4"
        >
          PREMIUM COLLECTIONS
        </span>

        {/* Heading */}
        <h2
          id="heading"
          className="font-serif text-[48px] font-normal leading-[1.15] text-black tracking-[-0.8px] m-0 mb-6 max-w-[650px]"
        >
          Bespoke Stone Collections
        </h2>

        {/* CTA Link */}
        <Link
          id="cta_link"
          href="#discover"
          className="inline-block no-underline font-sans text-[9px] font-semibold tracking-[2.2px] text-black uppercase border-b-[1.5px] border-black pb-1 mb-12"
        >
          DISCOVER MORE
        </Link>

        {/* Gallery Grid */}
        <div
          id="gallery_grid"
          className="grid grid-cols-[68.5%_29.5%] gap-x-[2%] w-full"
        >
          {/* Landscape Image - Living Room Interior */}
          <figure
            className="m-0 col-start-1 relative w-full"
          >
            <Image
              id="image_landscape"
              src="/assets/MAIA.png"
              alt="MAIA Bespoke stone furniture collection"
              width={1010}
              height={656}
              className="w-full h-auto block shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />
          </figure>

          {/* Portrait Video - MAIA Process */}
          <figure
            className="m-0 col-start-2 relative w-full h-full"
          >
            <video
              id="video_portrait"
              src="/assets/MAIA.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full block object-cover object-center shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default PremiumCollections;
