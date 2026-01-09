# Dependencies Installation Guide

This document contains all the dependencies required for the AKVID Sanitary Products website.

## All Dependencies in One Command

```bash
npm install framer-motion gsap lenis react-hook-form lucide-react
```

## Individual Dependencies

### Animation Libraries

```bash
npm install framer-motion
```
**Purpose**: React animation library for smooth transitions and animations

```bash
npm install gsap
```
**Purpose**: Professional-grade JavaScript animation library with ScrollTrigger

```bash
npm install lenis
```
**Purpose**: Smooth scroll library for enhanced scrolling experience

### Form Handling

```bash
npm install react-hook-form
```
**Purpose**: Performant, flexible form library with validation

### Icons

```bash
npm install lucide-react
```
**Purpose**: Beautiful & consistent icon pack

## Already Included Dependencies

The following are already included in the Next.js template:

- next
- react
- react-dom
- tailwindcss
- autoprefixer
- postcss
- @radix-ui/* components (from shadcn/ui)
- class-variance-authority
- clsx
- tailwind-merge

## Verification

After installation, verify all dependencies are installed:

```bash
npm list framer-motion gsap lenis react-hook-form lucide-react
```

## Complete Package.json Reference

Your `package.json` should include these in dependencies:

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "framer-motion": "^latest",
    "gsap": "^latest",
    "input-otp": "^1.2.4",
    "lenis": "^latest",
    "lucide-react": "^0.446.0",
    "next": "13.5.1",
    "next-themes": "^0.3.0",
    "react": "18.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss": "3.3.3",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.23.8"
  }
}
```

## Development Dependencies

These are already included:
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- typescript

## Notes

- All animation libraries are essential for the smooth UI/UX
- React Hook Form is used for the contact page
- Lucide React provides all the icons used throughout the site
- Lenis provides the smooth scrolling effect
- GSAP handles advanced scroll-triggered animations
- Framer Motion handles component animations and page transitions

## Troubleshooting

If you encounter any installation issues:

1. Clear npm cache:
```bash
npm cache clean --force
```

2. Delete node_modules and package-lock.json:
```bash
rm -rf node_modules package-lock.json
```

3. Reinstall:
```bash
npm install
```

## Version Compatibility

This project is tested with:
- Node.js: v18+ or v20+
- npm: v9+ or v10+
- Next.js: 13.5.1

For best results, use the latest LTS version of Node.js.
