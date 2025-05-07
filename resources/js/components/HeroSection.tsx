import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-yellow-400 min-h-[90vh] flex items-center justify-center px-6 md:px-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1570610155223-4adf3dd7dfff?auto=format&fit=crop&w=1650&q=80"
          alt="Barbing background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight drop-shadow-md">
          ✂️ Welcome to Ultra<span className="text-white">Care</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-800 font-medium max-w-2xl mx-auto">
          Where expert grooming meets modern style. Feel confident, look sharp, and experience the perfect trim.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/about-contact"
            className="bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Learn More
          </Link>
          <a
            href="#hairstyles"
            className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            View Styles
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
