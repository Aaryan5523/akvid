'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';
import TransitionLink from '@/components/TransitionLink';
import gsap from 'gsap';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Header scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: '-100%' },
        { y: 0, duration: 0.7, ease: 'power3.out' }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: 'power3.out',
        }
      );
    } else {
      gsap.to(menuRef.current, { y: '-100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
  ];

  const buttonColor = isHome && !scrolled ? 'text-white' : 'text-black';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* DESKTOP HEADER */}
      <div
        className={`hidden lg:flex items-center justify-between px-8 py-4 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-lg' : 'bg-transparent'
          }`}
      >
        <TransitionLink href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              {/*<img src="/images/logo.png" alt="AKVID" className="h-20 w-auto" />*/}
            </div>
          </div>
        </TransitionLink>

        <nav className="flex items-center gap-8">
          {menuItems.map((item) => (
            <TransitionLink key={item.name} href={item.href}>
              <span className={`text-base font-medium cursor-pointer ${scrolled || !isHome ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}>
                {item.name}
              </span>
            </TransitionLink>
          ))}
        </nav>
      </div>

      {/* MOBILE HEADER */}
      <div className={`flex lg:hidden items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <TransitionLink href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              {/*<img src="/images/logo.svg" alt="AKVID" className="h-10 w-auto" />*/}
            </div>
          </div>
        </TransitionLink>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={`${buttonColor}`} size={28} />
          ) : (
            <Menu className={`${buttonColor}`} size={28} />
          )}
        </button>
      </div>

      {/* MOBILE MENU FULL SCREEN */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 h-screen pointer-events-none"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {menuItems.map((item, i) => (
          <TransitionLink
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            ref={(el) => (linksRef.current[i] = el)}
          >
            <span className="text-3xl text-white font-bold cursor-pointer">
              {item.name}
            </span>
          </TransitionLink>
        ))}


      </div>
    </header>
  );
};

export default Header;
