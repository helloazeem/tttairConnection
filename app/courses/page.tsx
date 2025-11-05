'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CoursesPage() {
  const allCourses = [
    { icon: 'fas fa-wrench', title: 'Industrial Mechanic', description: 'Comprehensive training in industrial machinery operation, maintenance, and repair.', duration: '3-6 Months', badge: 'Technical', color: 'from-blue-500 to-blue-700' },
    { icon: 'fas fa-bolt', title: 'Electrician', description: 'Complete electrical wiring, installation, and maintenance training program.', duration: '3-6 Months', badge: 'Technical', color: 'from-amber-500 to-amber-700' },
    { icon: 'fas fa-hammer', title: 'Construction Worker', description: 'Building construction techniques, safety protocols, and equipment operation.', duration: '2-4 Months', badge: 'Construction', color: 'from-green-500 to-green-700' },
    { icon: 'fas fa-fire', title: 'Welder', description: 'Professional welding training covering multiple welding techniques and materials.', duration: '3-5 Months', badge: 'Technical', color: 'from-red-500 to-red-700' },
    { icon: 'fas fa-toolbox', title: 'Plumber', description: 'Complete plumbing installation, repair, and maintenance training program.', duration: '3-5 Months', badge: 'Technical', color: 'from-purple-500 to-purple-700' },
    { icon: 'fas fa-snowflake', title: 'HVAC Technician', description: 'Heating, ventilation, and air conditioning systems installation and maintenance.', duration: '4-6 Months', badge: 'Technical', color: 'from-cyan-500 to-cyan-700' },
    { icon: 'fas fa-ruler-combined', title: 'Carpenter', description: 'Woodworking, furniture making, and structural carpentry training.', duration: '3-5 Months', badge: 'Construction', color: 'from-orange-500 to-orange-700' },
    { icon: 'fas fa-paint-roller', title: 'Painter & Decorator', description: 'Professional painting, decorating, and finishing techniques training.', duration: '2-4 Months', badge: 'Construction', color: 'from-pink-500 to-pink-700' },
    { icon: 'fas fa-concierge-bell', title: 'Hospitality Worker', description: 'Hotel, restaurant, and hospitality service training for international standards.', duration: '2-4 Months', badge: 'Hospitality', color: 'from-teal-500 to-teal-700' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Training Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Professional Training Programs for International Employment
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-primary"
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
                      href="/apply"
                      className="px-5 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Training?</h2>
            <p className="text-xl text-gray-600 mb-10">Choose a course and begin your journey to a successful international career</p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Apply Now
              <i className="fas fa-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
