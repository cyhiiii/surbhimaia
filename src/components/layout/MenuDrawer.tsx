'use client';

import React from 'react';
import Link from 'next/link';
import { CloseIcon, HeartIcon, UserIcon, ChevronRightIcon } from '../icons/Icons';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  const navItems = [
    'PREMIUM BACKLIT STONE',
    'PREMIUM HARD STONE',
    'PREMIUM SHELL STONE',
    'WALL & JALI PANELS',
    'FURNITURE',
    'BASINS & COUNTERS',
    'FLOORS',
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[190] transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[480px] bg-white z-[200] shadow-[5px_0_15px_rgba(0,0,0,0.05)] flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="h-[80px] flex items-center justify-start px-[40px] gap-[24px]">
          <button
            onClick={onClose}
            className="cursor-pointer bg-transparent border-none p-0 text-black"
            aria-label="Close Menu"
          >
            <CloseIcon className="text-black" />
          </button>

          <Link
            href="#wishlist"
            className="flex items-center gap-[8px] no-underline text-black"
            onClick={onClose}
          >
            <HeartIcon className="text-black" />
            <span className="font-sans text-[13px]">My Wishlist</span>
          </Link>
        </div>

        {/* Main Nav List */}
        <nav className="flex flex-col pt-[20px] pb-[40px]">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="flex justify-between items-center px-[40px] py-[18px] text-black no-underline hover:bg-[#f9f9f9] transition-colors"
              onClick={onClose}
            >
              <span className="font-sans text-[14px] uppercase tracking-[0.5px]">{item}</span>
              <ChevronRightIcon className="text-black" />
            </Link>
          ))}

          {/* Contact / Consultation - Separated */}
          <Link
            href="#consultation"
            className="flex justify-between items-center px-[40px] py-[18px] mt-[20px] pt-[20px] border-t border-[#EEEEEE] text-black no-underline hover:bg-[#f9f9f9] transition-colors"
            onClick={onClose}
          >
            <span className="font-sans text-[14px] uppercase">BOOK A CONSULTATION</span>
            <ChevronRightIcon className="text-black" />
          </Link>
        </nav>

        {/* Utility Footer */}
        <div className="mt-auto px-[40px] pb-[40px] flex flex-col gap-[20px]">
          <Link
            href="#login"
            className="flex items-center gap-[12px] text-[13px] text-black no-underline"
            onClick={onClose}
          >
            <UserIcon className="text-black" />
            <span>Login</span>
          </Link>

          <div className="flex items-center gap-[12px] text-[12px] text-black cursor-pointer">
            {/* Toggle Switch UI Placeholder */}
            <div className="w-[32px] h-[18px] bg-[#E0E0E0] rounded-full relative">
              <div className="absolute left-[2px] top-[2px] w-[14px] h-[14px] bg-white rounded-full shadow-sm" />
            </div>
            <span>Increase contrast</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDrawer;
