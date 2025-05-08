import React from 'react';
import { motion } from 'framer-motion';

const hairstyles = [
  '/images/Autoimg1.jpg',
  '/images/Autoimg2.jpg',
  '/images/Autoimg3.jpg',
  '/images/Autoimg4.jpg',
  '/images/Autoimg5.jpg',
  '/images/Autoimg6.jpg',
  '/images/Autoimg7.jpg',
];

export default function MainSection() {
  return (
    <main className="bg-yellow-50 py-20 px-6 md:px-20 space-y-24 text-blue-900">
      
      {/* Auto-scrolling Hairstyles Gallery */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Signature Styles
        </h2>
        <div className="overflow-hidden relative mb-30">
          <motion.div
            className="flex space-x-10 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
          >
            {[...hairstyles, ...hairstyles].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`style-${idx}`}
                className="w-72 h-72 object-fit rounded-xl shadow-lg"
              />
            ))}
          </motion.div>
        </div>
      </section>

{/* Hair Care Tips – Modern UI */}
<section className="bg-white p-10 pt-20 rounded-xl shadow-lg max-w-6xl mx-auto text-center">
  <h3 className="text-4xl font-extrabold text-blue-900 mb-6">🧴 Hair Care Made Simple</h3>
  <p className="text-blue-900 text-lg mb-10 max-w-2xl mx-auto">
    A fresh cut deserves lasting care. Follow these essentials to keep your hair healthy, stylish, and strong.
  </p>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[
      { icon: '💧', tip: 'Clean your scalp regularly to avoid buildup.' },
      { icon: '🛁', tip: 'Wash 2–3 times weekly with a mild shampoo.' },
      { icon: '🪮', tip: 'Detangle gently from ends upward to reduce breakage.' },
      { icon: '🧴', tip: 'Use moisturizers or oils to maintain natural shine.' },
      { icon: '🔥', tip: 'Limit heat exposure & always use protectants.' },
      { icon: '✂️', tip: 'Trim split ends every 4–6 weeks to boost growth.' },
    ].map(({ icon, tip }, index) => (
      <div
        key={index}
        className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
      >
        <div className="text-3xl mb-3">{icon}</div>
        <p className="text-blue-900 font-medium">{tip}</p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}
