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
    botField: '', // 🛑 honeypot field
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

  // ✅ SECURE SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛑 BOT CHECK (honeypot)
    if (formData.botField) {
      console.warn('Bot detected');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

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
        botField: '',
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

      <section className="pt-40 pb-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Let’s discuss how AKVID can support your next project.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* INFO */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>

            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                text: 'Jamnagar, Gujarat, India',
              },
              {
                icon: Phone,
                title: 'Call Us',
                text: '+91 99799 60096',
              },
              {
                icon: Mail,
                title: 'Email Us',
                text: 'akvidbathfittings@gmail.com',
              },
            ].map((item, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* 🛑 HIDDEN BOT FIELD */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input name="name" required placeholder="Full Name *" className="input" onChange={handleChange} />
                <input name="email" type="email" required placeholder="Email *" className="input" onChange={handleChange} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input name="phone" placeholder="Phone" className="input" onChange={handleChange} />
                <input name="subject" required placeholder="Subject *" className="input" onChange={handleChange} />
              </div>

              <textarea name="message" rows={5} required placeholder="Your message *" className="input resize-none" onChange={handleChange} />

              {status.message && (
                <div className={`p-4 rounded-lg ${status.type === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
                  }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 text-white rounded-full font-semibold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
