'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HamburgerIcon, HeartIcon, SearchIcon, UserIcon, PhoneIcon, CartIcon } from '../icons/Icons';
import MenuDrawer from './MenuDrawer';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollPosition > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header style based on scroll or menu state
  const isHeaderWhite = isScrolled || isMenuOpen;
  const textColorClass = isHeaderWhite ? 'text-black' : 'text-white group-hover:text-black';

  return (
    <>
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <header
        id="header-nav"
        className={`fixed top-0 left-0 w-full z-50 group transition-all duration-300 ease-in-out ${
          isHeaderWhite ? 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'hover:bg-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]'
        }`}
        style={{
          paddingTop: '25px',
          paddingRight: '50px',
          paddingBottom: '25px',
          paddingLeft: '50px',
        }}
      >
        <div className="flex items-center justify-between">
          {/* header-left-group */}
          <div
            id="header-left-group"
            className="flex items-center"
            style={{ gap: '20px' }}
          >
            <button
              id="icon-hamburger"
              className={`cursor-pointer bg-transparent border-none p-0 transition-colors duration-300 ease-in-out ${textColorClass}`}
              aria-label="Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <HamburgerIcon className={`transition-colors duration-300 ease-in-out ${textColorClass}`} />
            </button>

            <Link
              id="link-wishlist-group"
              href="#wishlist"
              className={`flex items-center no-underline transition-colors duration-300 ease-in-out ${
                isHeaderWhite ? 'text-black' : 'group-hover:text-black'
              }`}
              style={{ gap: '8px' }}
              aria-label="My Wishlist"
            >
              <HeartIcon className={`transition-colors duration-300 ease-in-out ${textColorClass}`} />
              <span
                id="text-wishlist"
                className={`font-montserrat transition-colors duration-300 ease-in-out ${textColorClass}`}
                style={{
                  fontSize: '12px',
                  lineHeight: '14px',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                }}
              >
                My Wishlist
              </span>
            </Link>
          </div>

          {/* header-logo-group */}
          <div
            id="header-logo-group"
            className="flex flex-col items-center justify-center"
          >
            <h1
              id="logo-main"
              className={`uppercase font-messika m-0 transition-colors duration-300 ease-in-out ${textColorClass}`}
              style={{
                fontSize: '26px',
                lineHeight: '28px',
                fontWeight: 500,
                letterSpacing: '1.5px',
              }}
            >
            MAIA
          </h1>
          <p
            id="logo-sub"
            className={`uppercase font-messika m-0 transition-colors duration-300 ease-in-out ${textColorClass}`}
            style={{
              fontSize: '8px',
              lineHeight: '10px',
              fontWeight: 400,
              letterSpacing: '1.0px',
              marginTop: '2px',
            }}
          >
            BESPOKE
          </p>
        </div>

        {/* header-right-group */}
        <nav
          id="header-right-group"
          className="flex items-center justify-end"
          style={{ gap: '24px' }}
          aria-label="Main navigation"
        >
          <button
            id="icon-search"
            className={`bg-transparent border-none p-0 cursor-pointer transition-colors duration-300 ease-in-out ${textColorClass}`}
            aria-label="Search"
          >
            <SearchIcon className={`transition-colors duration-300 ease-in-out ${textColorClass}`} />
          </button>

          <button
            id="icon-user"
            className={`bg-transparent border-none p-0 cursor-pointer transition-colors duration-300 ease-in-out ${textColorClass}`}
            aria-label="Account"
          >
            <UserIcon className={`transition-colors duration-300 ease-in-out ${textColorClass}`} />
          </button>

          <button
            id="icon-phone"
            className={`bg-transparent border-none p-0 cursor-pointer transition-colors duration-300 ease-in-out ${textColorClass}`}
            aria-label="Contact"
          >
            <PhoneIcon className={`transition-colors duration-300 ease-in-out ${textColorClass}`} />
          </button>

          <button
            id="icon-cart"
            className={`bg-transparent border-none p-0 cursor-pointer transition-colors duration-300 ease-in-out ${textColorClass}`}
            aria-label="Shopping cart"
          >
            <CartIcon className={`transition-colors duration-300 ease-in-out ${textColorClass}`} />
          </button>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
