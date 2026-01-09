'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

export default function TransitionLink({ href, children, ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    if (window.location.pathname === href) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    const overlay = document.getElementById('page-transition');
    const title = document.getElementById('transition-title');

    if (!overlay) {
      router.push(href);
      return;
    }

    // Set page title and split into letters
    const text = href === '/' ? 'HOME' : href.replace('/', '').toUpperCase();
    title.innerHTML = '';
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.className = 'inline-block';
      span.textContent = char;
      title.appendChild(span);
    });

    const letters = title.children;

    // Reset overlay and letters
    gsap.set(overlay, { yPercent: 100 });
    gsap.set(letters, { opacity: 0, y: 20, scale: 0.95 });

    const tl = gsap.timeline({
      onComplete: () => router.push(href),
    });

    // EXIT animation → overlay slides slowly
    tl.to(overlay, {
      yPercent: 0,
      duration: 0.8, // slow overlay
      ease: 'power2.inOut',
    });

    // Delay text animation slightly → overlay first
    tl.to(
      letters,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08, // slower stagger for elegance
        duration: 0.7, // slower per letter
        ease: 'power2.out',
      },
      0.3 // start letters after 0.3s delay
    );
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
