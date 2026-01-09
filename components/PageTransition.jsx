'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const overlayRef = useRef(null);
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    const overlay = overlayRef.current;
    const title = overlay.querySelector('#transition-title');

    if (firstLoad.current) {
      gsap.set(overlay, { yPercent: -100 });
      gsap.set(title.children, { opacity: 0, scale: 0.95, y: 20 });
      firstLoad.current = false;
      return;
    }

    // ENTER animation → delay text fade until overlay moves
    const tl = gsap.timeline();

    tl.to(
      title.children,
      {
        opacity: 0,
        y: -20,
        scale: 0.95,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.inOut',
      },
      0.3 // delay text fade to match overlay
    ).to(
      overlay,
      {
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.out',
      },
      0
    );
  }, [pathname]);

  return (
    <>
      <div
        id="page-transition"
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
      >
        <h1
          id="transition-title"
          className="text-white text-6xl font-bold tracking-widest"
        />
      </div>
      {children}
    </>
  );
}
