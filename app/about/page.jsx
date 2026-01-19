'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, Zap, Shield, Users, TrendingUp, Globe } from 'lucide-react';

export default function About() {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every product we manufacture.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge designs and technology.',
    },

    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority in everything we do.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuously expanding our range and improving our offerings.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable manufacturing.',
    },

    {
      icon: Shield,
      title: 'Safety',
      description: 'Ensuring safe manufacturing processes for our employees and customers.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'Adapting quickly to market changes and customer needs.',
    },

    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Striving for excellence in every product and service we offer.',
    },
    {
      icon: Eye,
      title: 'Continuous Improvement',
      description: 'Always seeking ways to enhance our products and processes.',
    }
  ];

  /*const milestones = [
     { year: '1998', event: 'Company Founded', description: 'Started with a vision to revolutionize sanitary products' },
     { year: '2005', event: 'National Expansion', description: 'Expanded operations across India' },
     { year: '2012', event: 'International Market', description: 'Entered global markets with premium products' },
     { year: '2018', event: 'Innovation Award', description: 'Recognized for design excellence and innovation' },
     { year: '2023', event: '50K+ Customers', description: 'Milestone of serving over 50,000 happy customers' },
   ];*/

  return (
    <div className="overflow-hidden">
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?cs=srgb&dl=pexels-christa-grover-977018-1910472.jpg&fm=jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About AKVID
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            25+ years of excellence in premium AKVID Bath Fittings
          </motion.p>
        </div>
      </section >

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://st.hzcdn.com/simgs/b071b10205cf04ef_14-6054/_.jpg)' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 1998, Jayesh Jewellers has grown from a small manufacturing unit to one of India's leading
                jewellery products manufacturers. Our journey has been driven by an unwavering commitment to
                quality, innovation, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With state-of-the-art manufacturing facilities and a team of experienced professionals, we
                produce a comprehensive range of jewellery products that combine aesthetic appeal with
                functional excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={missionRef} className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To deliver world-class sanitary products that enhance the quality of life for our customers
                while maintaining environmental responsibility and sustainable manufacturing practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the most trusted and innovative sanitary products manufacturer globally, setting
                industry benchmarks for quality, design, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6"
                >
                  <value.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div >
  );
}
