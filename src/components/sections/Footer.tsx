'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white font-montserrat">
      {/* Benefits Section */}
      <div
        style={{
          background: '#FAFAFA',
          color: '#000000',
          padding: '60px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            textAlign: 'center',
          }}
        >
          {/* Benefit 1: Contact Us */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              style={{ marginBottom: '24px' }}
            >
              <rect x="2" y="6" width="36" height="22" rx="1" />
              <path d="M2 10 L20 18 L38 10" />
            </svg>
            <h4
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}
            >
              CONTACT US
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                fontWeight: 400,
                color: '#767676',
                lineHeight: '1.5',
                maxWidth: '280px',
              }}
            >
              A MAIA Bespoke adviser is available to discuss your custom stone furniture project and answer all your questions.
            </p>
          </div>

          {/* Benefit 2: Delivery */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              style={{ marginBottom: '24px' }}
            >
              <rect x="2" y="10" width="20" height="14" />
              <path d="M22 10 L30 10 L34 16 L34 24 L22 24 Z" />
              <circle cx="10" cy="26" r="3" />
              <circle cx="28" cy="26" r="3" />
            </svg>
            <h4
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}
            >
              COMPLIMENTARY CONSULTATION
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                fontWeight: 400,
                color: '#767676',
                lineHeight: '1.5',
                maxWidth: '280px',
              }}
            >
              MAIA Bespoke offers complimentary initial consultations to understand your vision and space requirements.
            </p>
          </div>

          {/* Benefit 3: Gift Box */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              style={{ marginBottom: '24px' }}
            >
              <rect x="4" y="4" width="24" height="24" rx="2" />
              <path d="M4 12 L28 12" />
              <path d="M16 4 L16 28" />
              <circle cx="10" cy="8" r="1.5" fill="#000" />
              <circle cx="22" cy="16" r="1.5" fill="#000" />
              <circle cx="10" cy="20" r="1.5" fill="#000" />
            </svg>
            <h4
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}
            >
              3D VISUALIZATION
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                fontWeight: 400,
                color: '#767676',
                lineHeight: '1.5',
                maxWidth: '280px',
              }}
            >
              Visualize your bespoke piece with detailed 3D models before production begins, ensuring perfect alignment with your vision.
            </p>
          </div>

          {/* Benefit 4: Pay in Installments */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              style={{ marginBottom: '24px' }}
            >
              <rect x="2" y="8" width="36" height="20" rx="2" />
              <path d="M20 8 L26 8 L26 12 L20 12 Z" />
              <circle cx="12" cy="10" r="1.5" fill="#000" />
              <circle cx="16" cy="16" r="1.5" fill="#000" />
              <circle cx="8" cy="20" r="1.5" fill="#000" />
            </svg>
            <h4
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}
            >
              MASTER ARTISAN CRAFTSMANSHIP
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '14px',
                fontWeight: 400,
                color: '#767676',
                lineHeight: '1.5',
                maxWidth: '280px',
              }}
            >
              Every piece is meticulously crafted by skilled artisans using premium stone materials with rigorous quality checks.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div
        style={{
          background: '#000000',
          padding: '60px 60px 40px',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2fr 3fr',
            gap: '24px',
          }}
        >
          {/* Column 1: MESSIKA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h5
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              COLLECTIONS
            </h5>
            <Link
              href="#"
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 400,
              }}
              className="footer-link"
            >
              Premium Backlit Stone
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Premium Hard Stone
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Premium Shell Stone
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Wall & Jali Panels
            </Link>
          </div>

          {/* Column 2: CUSTOMER SERVICE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h5
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              SERVICES
            </h5>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Contact us
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Consultation
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              3D Visualization
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Custom Design Process
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Installation
            </Link>
          </div>

          {/* Column 3: POINTS OF SALE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h5
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              PRODUCTS
            </h5>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Basins & Counters
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Floors
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Furniture
            </Link>
            <Link href="#" className="footer-link" style={{ fontSize: '13px', color: '#FFFFFF', textDecoration: 'none' }}>
              Knobs & Handles
            </Link>
          </div>

          {/* Column 4: NEWS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h5
              style={{
                fontFamily: 'var(--font-montserrat)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              NEWS
            </h5>
            <Link
              href="#"
              className="footer-link"
              style={{
                fontSize: '13px',
                color: '#FFFFFF',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Subscribe to the newsletter
            </Link>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '10px' }}>
              {/* TikTok */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
              </svg>

              {/* YouTube */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>

              {/* Pinterest */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
              </svg>

              {/* Twitter/X */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>

              {/* Facebook */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>

              {/* Instagram */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>

              {/* Snapchat */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M15.98 11.93c-.09.33-.39.52-.76.52-.23 0-.48-.06-.76-.12-.37-.09-.78-.18-1.15-.18-.2 0-.38.03-.54.1.22.36.61.97 1.18 1.82.13.19.2.38.2.55 0 .4-.33.72-.74.72-.07 0-.15-.01-.23-.03-.92-.18-1.84-.52-2.73-1.01-.54-.3-1.01-.55-1.46-.76-.45.21-.91.46-1.45.76-.9.49-1.81.83-2.74 1.01-.08.02-.15.03-.23.03-.4 0-.73-.32-.73-.72 0-.17.06-.36.19-.55.57-.85.96-1.46 1.19-1.82-.16-.07-.34-.1-.54-.1-.37 0-.78.09-1.15.18-.28.06-.53.12-.76.12-.37 0-.67-.19-.76-.52-.08-.32.06-.64.37-.84.43-.27.89-.43 1.36-.47.13-.01.27-.02.41-.02.42 0 .86.05 1.3.15.08-.12.14-.26.18-.42.06-.27.08-.56.08-.86 0-1.44-.23-2.64-.69-3.57C6.55 3.22 5.84 2.75 5 2.75c-.14 0-.26.02-.38.05-.17.04-.32.1-.46.17-.08.05-.18.07-.27.07-.23 0-.44-.16-.49-.39-.06-.29.11-.57.4-.67C3.99 1.89 4.22 1.83 4.45 1.78c.16-.04.33-.06.5-.06 1.19 0 2.24.66 3.05 1.9.53.82.88 1.9.99 3.08.01.14.02.28.02.43v.54c.05.01.1.02.15.02.05 0 .1-.01.15-.02v-.54c0-.15.01-.29.02-.43.11-1.18.46-2.26.99-3.08.81-1.24 1.86-1.9 3.05-1.9.17 0 .34.02.5.06.23.05.46.11.65.2.29.1.46.38.4.67-.05.23-.26.39-.49.39-.09 0-.19-.02-.27-.07-.14-.07-.29-.13-.46-.17-.12-.03-.24-.05-.38-.05-.84 0-1.55.47-2.11 1.4-.46.93-.69 2.13-.69 3.57 0 .3.02.59.08.86.04.16.1.3.18.42.44-.1.88-.15 1.3-.15.14 0 .28.01.41.02.47.04.93.2 1.36.47.31.2.45.52.37.84z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          background: '#000000',
          borderTop: '1px solid #333333',
          padding: '20px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 60px',
          }}
        >
          {/* Left: Legal Links */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: '11px', color: '#FFFFFF' }}>©MAIA Bespoke</span>
            <Link href="#" style={{ fontSize: '11px', color: '#FFFFFF', textDecoration: 'none' }}>
              Legal mentions
            </Link>
            <Link href="#" style={{ fontSize: '11px', color: '#FFFFFF', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="#" style={{ fontSize: '11px', color: '#FFFFFF', textDecoration: 'none' }}>
              Cookie policy
            </Link>
            <Link href="#" style={{ fontSize: '11px', color: '#FFFFFF', textDecoration: 'none' }}>
              Terms of service
            </Link>
            <Link href="#" style={{ fontSize: '11px', color: '#FFFFFF', textDecoration: 'none' }}>
              Sitemap
            </Link>
          </div>

          {/* Right: Country/Language Selectors */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {/* Country Selector */}
            <button
              style={{
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #666',
                paddingBottom: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '11px', color: '#666666' }}>Country / Region</span>
              <span style={{ fontSize: '11px', color: '#FFFFFF' }}>MAIA Bespoke Global</span>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="white">
                <path d="M0 0 L4 5 L8 0 Z" />
              </svg>
            </button>

            {/* Language Selector */}
            <button
              style={{
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #666',
                paddingBottom: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '11px', color: '#666666' }}>Language</span>
              <span style={{ fontSize: '11px', color: '#FFFFFF' }}>English</span>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="white">
                <path d="M0 0 L4 5 L8 0 Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          transition: opacity 0.2s;
        }
        .footer-link:hover {
          opacity: 0.7;
        }
      `}</style>
    </footer>
  );
}
