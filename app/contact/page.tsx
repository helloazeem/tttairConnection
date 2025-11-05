'use client';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Visit Us', content: ['247 Shahid Nagar, Matuail Medical Road', 'Kutubpur Union, Fatullah', 'Narayanganj, Bangladesh'], color: 'from-blue-500 to-blue-700' },
    { icon: 'fas fa-phone', title: 'Call Us', content: ['+88 01552 637898', '+88 01817 612825', 'Available 24/7'], color: 'from-green-500 to-green-700' },
    { icon: 'fas fa-envelope', title: 'Email Us', content: ['airconnection716@gmail.com', "We'll respond within 24 hours"], color: 'from-purple-500 to-purple-700' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl">Get in touch with our team for any inquiries or assistance</motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 text-center border-2 border-gray-100 hover:border-primary"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6`}>
                  <i className={info.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{info.title}</h3>
                {info.content.map((line, i) => (
                  <p key={i} className="text-gray-600 mb-2">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Office Hours</h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{title: 'Working Days', time: 'Saturday - Thursday', hours: '9:00 AM - 6:00 PM'}, {title: 'Weekend', time: 'Friday', hours: 'Closed'}, {title: 'Emergency', time: '24/7 Available', hours: 'Call anytime'}].map((hour, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-6 text-center shadow-md">
                <h4 className="text-xl font-bold text-primary mb-3">{hour.title}</h4>
                <p className="text-gray-900 font-medium">{hour.time}</p>
                <p className="text-gray-600">{hour.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-10">Apply now and take the first step towards your international career</p>
          <a href="/apply" className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">Apply Now <i className="fas fa-arrow-right"></i></a>
        </div>
      </section>
    </div>
  );
}
