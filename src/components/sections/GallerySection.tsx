'use client';

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'THE ROYAL OBEROI',
    location: 'NEW DELHI',
    category: 'Lobby Installation',
    image: '/assets/1.png', // Using existing assets as placeholders
    width: 'w-full md:w-[65%]',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 2,
    title: 'PRIVATE ESTATE',
    location: 'DUBAI',
    category: 'Dining Console',
    image: '/assets/2.png',
    width: 'w-full md:w-[30%]',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 3,
    title: 'VILLA MAGNIFIQUE',
    location: 'CANNES',
    category: 'Pietra Dura Wall',
    image: '/assets/3.png',
    width: 'w-full md:w-[30%]',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 4,
    title: 'PENTHOUSE SUITE',
    location: 'LONDON',
    category: 'Bespoke Bar',
    image: '/assets/MAIA.png',
    width: 'w-full md:w-[65%]',
    aspect: 'aspect-[16/9]'
  }
];

const GallerySection = () => {
  return (
    <section className="relative w-full bg-white py-32 z-10">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-8">
          <div>
            <h2 className="font-['Montserrat'] text-4xl font-light tracking-widest text-black mb-2">
              SIGNATURE COMMISSIONS
            </h2>
            <p className="font-['Montserrat'] text-sm tracking-[0.2em] text-gray-500 uppercase">
              Where Vision Meets Reality
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <button className="text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity">
              View All Projects
            </button>
          </div>
        </div>

        {/* Masonry Layout */}
        <div className="flex flex-wrap gap-8 justify-between">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`relative group cursor-pointer ${project.width}`}
            >
              <div className={`relative w-full ${project.aspect} overflow-hidden bg-gray-100`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="font-['Montserrat'] text-lg font-medium tracking-wide text-black">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-[#D4AF37] tracking-widest mt-1">
                    {project.location}
                  </p>
                </div>
                <span className="text-xs text-gray-400 tracking-wider uppercase border border-gray-200 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
