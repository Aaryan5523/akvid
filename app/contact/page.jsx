'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus({
        type: 'success',
        message: 'Thank you! Our team will contact you shortly.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">

      {/* ================= HERO / BANNER ================= */}
      <section className="pt-40 pb-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Let’s discuss how AKVID can support your next project.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section ref={sectionRef} className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>

            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                text: 'Plot No. 4481, Nr. Gaushala Circle, "L" Road, Phase-3, DARED, JAMNAGAR - 361 005. (Gujarat) INDIA',
              },
              {
                icon: Phone,
                title: 'Call Us',
                text: '+91 99799 60096 | Mon–Sat, 9AM–6PM',
              },
              {
                icon: Mail,
                title: 'Email Us',
                text: 'akvidbathfittings@gmail.com',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <item.icon className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT – FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Your message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="input resize-none"
              />

              {status.message && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-lg ${status.type === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                    }`}
                >
                  {status.type === 'success' ? <CheckCircle /> : <AlertCircle />}
                  {status.message}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP ================= */}

    </div>
  );
}
