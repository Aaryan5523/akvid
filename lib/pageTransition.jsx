import gsap from 'gsap';

export const pageLeave = (overlay) => {
  const blocks = overlay.children;

  return gsap.fromTo(
    blocks,
    { scaleY: 0, transformOrigin: 'top' },
    {
      scaleY: 1,
      duration: 0.7,
      ease: 'power4.inOut',
      stagger: {
        each: 0.05,
        from: 'start', // top → down
      },
    }
  );
};
