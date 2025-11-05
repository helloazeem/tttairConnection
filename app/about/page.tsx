'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">About Air Connection</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl">Your Trusted Partner in International Skilled Work Training</motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-6">AIR CONNECTION Human Resource Foundation is a leading training center dedicated to preparing skilled workers for international employment opportunities. We bridge the gap between local talent and global job markets.</p>
            <p className="text-lg text-gray-600">With years of experience in training and placement, we have successfully helped hundreds of candidates secure rewarding positions abroad.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{value: '500+', label: 'Students Trained'}, {value: '15+', label: 'Training Courses'}, {value: '20+', label: 'Countries'}, {value: '95%', label: 'Success Rate'}].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
