import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function AboutContact() {
  return (
    <div className="min-h-screen bg-yellow-50 text-blue-900 flex flex-col justify-between">
      
      {/* Header */}
      <header className="bg-yellow-400 px-10 md:px-20 py-6 shadow-md flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-wide transform hover:scale-105 transition duration-300">
          <Link href="/">✂️ Ultra<span className="text-white">Care</span></Link>
        </h1>
        <nav className="flex space-x-6 md:space-x-10">
          <Link href="/" className="hover:bg-blue-900 hover:text-white px-3 py-1 rounded font-semibold transition">Home</Link>
          <Link href="/about-contact" className="hover:bg-blue-900 hover:text-white px-3 py-1 rounded font-semibold transition">About & Contact</Link>
        </nav>
      </header>

      {/* Main Section */}
      <section className="py-16 px-6 md:px-20 bg-yellow-100 flex-1">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* About Section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center bg-white p-8 rounded-xl shadow-xl gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1588778492044-3d19cdaaf6c3?auto=format&fit=crop&w=800&q=80"
                alt="Barbers at work"
                className="rounded-xl shadow-md w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="text-4xl font-bold text-blue-900">About ✂️ Ultra<span className="text-yellow-500">Care</span></h2>
              <p className="text-blue-800 text-lg">
                UltraCare is your trusted neighborhood barbing salon offering expert grooming with modern finesse. From fresh fades to classic cuts, we ensure each client walks out feeling and looking their best.
              </p>
              <p className="text-blue-800">
                Our services blend tradition and trend, providing a relaxing environment and affordable styling with professional results.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            className="relative bg-blue-900 text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Image with Info Overlay */}
            <div className="md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b9642737?auto=format&fit=crop&w=800&q=80"
                alt="Contact us"
                className="rounded-xl w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-6 text-white bg-blue-900 bg-opacity-60 rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
                <p className="mb-4 text-blue-100">Have a question or need a trim? We’re here for you!</p>
                <ul className="space-y-2">
                  <li><strong>📞 Phone:</strong> +234 815 9733 921</li>
                  <li><strong>📧 Email:</strong> durojaiyesoga@gmail.com</li>
                  <li><strong>📍 Address:</strong> Ogijo, Ogun State, Nigeria</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <form
              method="POST"
              action="/contact"
              className="md:w-1/2 bg-white bg-opacity-90 p-6 rounded-lg text-blue-900 shadow-md w-full"
            >
              {/* CSRF Token */}
              <input type="hidden" name="_token" value={(window as any).csrfToken} />

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input name="name" type="text" placeholder="Your Name" className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input name="email" type="email" placeholder="you@example.com" className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea name="message" rows={3} placeholder="How can we help you?" className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400" required></textarea>
              </div>
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 font-semibold rounded w-full">Send</button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-yellow-100 text-center py-6 px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} UltraCare Barbing Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}
