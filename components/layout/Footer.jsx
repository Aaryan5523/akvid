'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Wash Basins', href: '/products?category=wash-basins' },
      { name: 'Toilets & WCs', href: '/products?category=toilets' },
      { name: 'Faucets & Taps', href: '/products?category=faucets' },
      { name: 'Showers', href: '/products?category=showers' },
      { name: 'Accessories', href: '/products?category=accessories' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Products', href: '/products' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/17XzYCK9ma/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/ABath80272', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/aaskasanitation?igsh=MzcxbGsyejN3eHpq', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/akvid-bath-kaushik-patel-416439178?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@aaska_sanitation?si=xh3rrpY9zAABti94', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AKVID</h3>
                <p className="text-sm text-gray-400">Bath Fitting</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of premium sanitary products. Quality, innovation, and excellence in every product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-blue-400">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-blue-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-blue-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Plot No. 4481, Nr. Gaushala Circle, "L" Road, Phase-3, DARED, JAMNAGAR-361 005. (Gujarat) INDIA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+919979960096" className="text-gray-400 hover:text-white transition-colors">
                  +91 99799 60096
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:akvidbathfittings@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  akvidbathfittings@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} AKVID Bath Fitting. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
