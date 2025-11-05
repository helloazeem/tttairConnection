'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About Us' },
    { href: '/apply', label: 'Apply Now' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-youtube', href: '#', label: 'YouTube' },
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-whatsapp', href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">AIR CONNECTION</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner for international skilled work training and placement.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>247 Shahid Nagar, Matuail Medical Road, Kutubpur Union, Fatullah, Narayanganj</span>
              </li>
              <li>
                <i className="fas fa-phone"></i> +88 01552 637898
              </li>
              <li>
                <i className="fas fa-phone"></i> +88 01817 612825
              </li>
              <li>
                <i className="fas fa-envelope"></i> airconnection716@gmail.com
              </li>
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Saturday - Thursday: 9:00 AM - 6:00 PM</li>
              <li>Friday: Closed</li>
              <li className="text-green-400">Emergency: 24/7 Available</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} AIR CONNECTION Human Resource Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
