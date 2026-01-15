# JAYESH JEWELLERS

A beautiful, fully animated Next.js website for AKVID sanitary products factory featuring smooth animations, modern design, and comprehensive functionality.

## Features

- **Smooth Animations**: Powered by Framer Motion, GSAP, and Lenis smooth scrolling
- **Modern UI/UX**: Clean white, blue, and black theme with premium design
- **Page Transitions**: Custom 12-grid animation transitions between pages
- **Responsive Design**: Fully responsive across all devices
- **Product Catalog**: Category-wise product listings with filtering
- **Contact Form**: Working contact form with validation
- **WhatsApp Integration**: Floating WhatsApp button for instant chat
- **SEO Optimized**: Meta tags, sitemap, and robots.txt for Google ranking
- **Performance**: Optimized for 100% performance scores
- **Catalog Download**: Downloadable product catalog

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS
- **Animations**:
  - Framer Motion
  - GSAP with ScrollTrigger
  - Lenis Smooth Scroll
- **UI Components**: Radix UI + Shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Installation

1. **Install Dependencies**:
```bash
npm install
```

All required dependencies:
- framer-motion
- gsap
- lenis
- react-hook-form
- lucide-react
- @radix-ui/* (various components)
- next, react, react-dom
- tailwindcss, autoprefixer, postcss

2. **Run Development Server**:
```bash
npm run dev
```

3. **Build for Production**:
```bash
npm run build
```

4. **Start Production Server**:
```bash
npm start
```

## Project Structure

```
project/
├── app/
│   ├── layout.jsx          # Root layout with header, footer, smooth scroll
│   ├── page.jsx            # Home page with banner slider
│   ├── about/
│   │   └── page.jsx        # About page
│   ├── products/
│   │   └── page.jsx        # Products page with category filters
│   ├── contact/
│   │   └── page.jsx        # Contact page with form
│   ├── sitemap.js          # Dynamic sitemap
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.jsx      # Animated header with navigation
│   │   ├── Footer.jsx      # Footer with links and info
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp button
│   ├── PageTransition.jsx  # 12-grid page transition
│   ├── SmoothScroll.jsx    # Lenis smooth scroll wrapper
│   └── Loader.jsx          # Initial page loader
├── data/
│   └── products.json       # Product data with categories
└── public/
    ├── robots.txt          # SEO robots file
    └── catalog.pdf         # Downloadable catalog
```

## Pages

### Home Page
- Auto-playing banner slider with 3 slides
- Statistics section with animated counters
- Product categories grid
- Catalog download CTA section

### Products Page
- Category filter buttons
- Product cards with images, features, and pricing
- Smooth loading animations
- Responsive grid layout

### About Page
- Company story section
- Mission and vision cards
- Core values grid
- Timeline of milestones

### Contact Page
- Contact information cards
- Working contact form
- Google Maps integration
- Form validation

## Customization

### Changing Colors
The theme uses blue, white, and black. To change colors, update:
- `tailwind.config.ts` for theme colors
- `app/globals.css` for custom CSS variables

### Updating Products
Edit `data/products.json` to add/modify:
- Product categories
- Individual products
- Pricing and features

### WhatsApp Number
Update the phone number in `components/layout/WhatsAppButton.jsx`:
```javascript
const phoneNumber = '919979960096'; // Change this
```

### Contact Information
Update contact details in:
- `components/layout/Footer.jsx`
- `app/contact/page.jsx`

### Images
All images are from Pexels (free stock photos). Replace with your own:
- Banner images in `app/page.jsx`
- Product images in `data/products.json`
- Category images in `data/products.json`

### Catalog PDF
Replace `public/catalog.pdf` with your actual product catalog.

## Animation Details

### Lenis Smooth Scroll
- Custom easing function for smooth scrolling
- Works on all pages
- Integrated with GSAP ScrollTrigger

### Framer Motion
- Page transitions
- Component animations
- Hover effects
- Loading states

### GSAP
- Scroll-triggered animations
- Stagger effects on lists
- Advanced timing control

## SEO Optimization

- Comprehensive meta tags
- Open Graph for social sharing
- Twitter Card support
- Dynamic sitemap
- Robots.txt
- Semantic HTML
- Alt tags on images
- Fast loading times

## Performance Optimization

- Static page generation
- Optimized images
- Code splitting
- Lazy loading
- Minimal dependencies
- CSS optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Environment variables: None required

### Vercel
1. Import your repository
2. Vercel auto-detects Next.js
3. Deploy

### Other Platforms
Use the build output from `.next` directory

## Future Enhancements

- Add product search functionality
- Implement shopping cart
- Add product comparison
- Multi-language support
- Admin panel for product management
- Blog section
- Customer testimonials
- Video gallery

## Support

For support, email akvidbathfittings@gmail.com or call +91 99799 60096

## License

© 2026 AKVID Sanitary Products. All rights reserved.
"# AKVID" 
"# AKVID" 
"# AKVID" 
# akvid
# jeweller-store
# jeweller-store
