'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">Apply for Training</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl">Start your journey to a successful international career</motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {submitted && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-3">
              <i className="fas fa-check-circle text-2xl"></i>
              <div><strong>Application Submitted Successfully!</strong><p>We'll contact you within 24 hours.</p></div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold mb-2">Full Name <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold mb-2">Email Address <span className="text-red-500">*</span></label>
                <input type="email" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Age <span className="text-red-500">*</span></label>
                <input type="number" min="18" max="65" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold mb-2">Select Course <span className="text-red-500">*</span></label>
                <select required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition">
                  <option value="">Choose a training course</option>
                  <option>Industrial Mechanic</option>
                  <option>Electrician</option>
                  <option>Construction Worker</option>
                  <option>Welder</option>
                  <option>Plumber</option>
                  <option>HVAC Technician</option>
                  <option>Carpenter</option>
                  <option>Painter</option>
                  <option>Hospitality Worker</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">Education Level <span className="text-red-500">*</span></label>
                <select required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition">
                  <option value="">Select education level</option>
                  <option>Below SSC</option>
                  <option>SSC</option>
                  <option>HSC</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-semibold mb-2">Address <span className="text-red-500">*</span></label>
              <input type="text" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition" />
            </div>
            <div className="mb-6">
              <label className="block font-semibold mb-2">Previous Experience (if any)</label>
              <textarea rows={4} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"></textarea>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
              <i className="fas fa-paper-plane mr-2"></i> Submit Application
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
}
