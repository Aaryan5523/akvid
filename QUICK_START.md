# Quick Start Guide - AKVID Website

## Step 1: Install Dependencies

Run this single command to install all required packages:

```bash
npm install
```

This will install:
- framer-motion (animations)
- gsap (advanced animations)
- lenis (smooth scrolling)
- react-hook-form (contact form)
- lucide-react (icons)
- All Next.js and React packages
- All UI components

## Step 2: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: View the Site

You should see:
- ✅ Animated home page with banner slider
- ✅ Smooth scrolling throughout
- ✅ Products page with filters
- ✅ About page with animations
- ✅ Contact page with form
- ✅ WhatsApp button (bottom right)

## Quick Customization

### Change WhatsApp Number
Edit `components/layout/WhatsAppButton.jsx`:
```javascript
const phoneNumber = '919876543210'; // Change to your number
```

### Update Contact Info
Edit `components/layout/Footer.jsx` and `app/contact/page.jsx`

### Add/Edit Products
Edit `data/products.json`:
```json
{
  "id": 1,
  "name": "Product Name",
  "category": "category-id",
  "price": "₹1,000",
  "description": "Description",
  "features": ["Feature 1", "Feature 2"],
  "image": "https://your-image-url.com"
}
```

### Replace Images
Update image URLs in:
- `app/page.jsx` (banner slides)
- `data/products.json` (product images)

## Build for Production

```bash
npm run build
```

## Common Issues

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next
npm run dev
```

### Dependency Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## File Locations

| What | Where |
|------|-------|
| Home Page | `app/page.jsx` |
| Products | `app/products/page.jsx` |
| Product Data | `data/products.json` |
| Header | `components/layout/Header.jsx` |
| Footer | `components/layout/Footer.jsx` |
| WhatsApp | `components/layout/WhatsAppButton.jsx` |
| Styles | `app/globals.css` |

## Testing Animations

### Smooth Scroll
- Scroll down on any page
- Should feel smooth and controlled

### Page Transitions
- Click between pages
- Watch 12-grid animation

### Hover Effects
- Hover over buttons
- Hover over product cards
- Hover over category cards

### Mobile Menu
- Resize browser to mobile size
- Click hamburger menu
- Menu should slide in

## Deployment Checklist

Before deploying:
- [ ] Update all contact information
- [ ] Replace placeholder images
- [ ] Update product data
- [ ] Replace catalog PDF
- [ ] Update company details
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify WhatsApp opens correctly
- [ ] Test contact form

## Deploy to Netlify

1. Build the site:
```bash
npm run build
```

2. In Netlify:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or 20

## Deploy to Vercel

1. Connect your GitHub repo to Vercel
2. Vercel auto-detects Next.js settings
3. Click Deploy

## Performance Tips

✅ All pages are statically generated
✅ Images are optimized
✅ Code is split automatically
✅ Animations are GPU-accelerated

## Browser Support

Works on:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Need Help?

1. Check README.md for detailed docs
2. Check DEPENDENCIES.md for install issues
3. Check console for error messages

## Next Steps

After setup:
1. Customize content and images
2. Test on different devices
3. Optimize images for faster loading
4. Add your real product catalog
5. Deploy to production

---

**You're all set!** 🚀

The website is fully functional with:
- ✅ Smooth animations
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Contact form
- ✅ Product catalog
- ✅ WhatsApp integration

Enjoy your new website!
