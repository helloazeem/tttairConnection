'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About Us' },
    { href: '/apply', label: 'Apply Now' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap text-sm">
            <div className="flex gap-6 flex-wrap">
              <a href="tel:+8801552637898" className="flex items-center gap-2 hover:text-accent transition">
                <i className="fas fa-phone"></i> +88 01552 637898
              </a>
              <a href="mailto:airconnection716@gmail.com" className="flex items-center gap-2 hover:text-accent transition">
                <i className="fas fa-envelope"></i> airconnection716@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white text-2xl">
                <i className="fas fa-plane-departure"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">AIR CONNECTION</h1>
                <p className="text-xs text-gray-600">Human Resource Foundation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-medium transition relative group ${
                      pathname === link.href ? 'text-primary' : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="w-6 h-0.5 bg-gray-900 transition-all"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-gray-900 transition-all"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="w-6 h-0.5 bg-gray-900 transition-all"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden flex flex-col gap-4 pb-4"
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium transition block py-2 ${
                        pathname === link.href ? 'text-primary' : 'text-gray-900 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
