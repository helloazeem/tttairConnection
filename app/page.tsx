'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import 3D component to avoid SSR issues
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

export default function Home() {
  const features = [
    {
      icon: 'fas fa-certificate',
      title: 'Certified Training',
      description: 'Government approved training programs with internationally recognized certifications',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world international work experience',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Job Placement',
      description: 'Direct connections with employers and assistance in securing overseas positions',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: 'fas fa-language',
      title: 'Language Support',
      description: 'Basic language training included to help you communicate in your destination country',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Interview Preparation',
      description: 'Mock interviews and guidance to help you succeed in employer interviews',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: 'fas fa-headset',
      title: 'Full Support',
      description: 'Guidance throughout the entire process from training to departure',
      color: 'from-cyan-500 to-cyan-700',
    },
  ];

  const courses = [
    {
      icon: 'fas fa-wrench',
      title: 'Industrial Mechanic',
      description: 'Learn industrial machinery operation, maintenance, and repair skills',
      duration: '3-6 Months',
      badge: 'Technical',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: 'fas fa-bolt',
      title: 'Electrician',
      description: 'Comprehensive electrical wiring, installation, and maintenance training',
      duration: '3-6 Months',
      badge: 'Technical',
      color: 'from-amber-500 to-amber-700',
    },
    {
      icon: 'fas fa-hammer',
      title: 'Construction Worker',
      description: 'Building construction techniques, safety protocols, and equipment operation',
      duration: '2-4 Months',
      badge: 'Construction',
      color: 'from-green-500 to-green-700',
    },
  ];

  const stats = [
    { value: '500+', label: 'Students Trained' },
    { value: '15+', label: 'Training Courses' },
    { value: '20+', label: 'Countries' },
    { value: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white overflow-hidden">
        <Hero3D />

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Your Gateway to Global Opportunities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 text-white/90"
            >
              Professional Training for Skilled Work Abroad - Build Your Future with Confidence
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link
                href="/apply"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Apply for Training
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link
                href="/courses"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                View Courses
                <i className="fas fa-book-open"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[10%] text-6xl text-white/20"
        >
          <i className="fas fa-graduation-cap"></i>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-40 right-[15%] text-7xl text-white/20"
        >
          <i className="fas fa-briefcase"></i>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-32 left-[15%] text-6xl text-white/20"
        >
          <i className="fas fa-globe-americas"></i>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Air Connection</h2>
            <p className="text-xl text-gray-600">We provide comprehensive training and support for your international career</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6`}>
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Training Courses</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of specialized training programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-6xl`}>
                  <i className={course.icon}></i>
                </div>
                <div className="p-6">
                  <span className="inline-block px-4 py-1 bg-blue-100 text-primary rounded-full text-sm font-semibold mb-4">
                    {course.badge}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="fas fa-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <Link
                      href="/courses"
                      className="px-5 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-3"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-lg md:text-xl text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-10">Join hundreds of successful candidates who have built their careers abroad</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/apply"
                className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
                <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
