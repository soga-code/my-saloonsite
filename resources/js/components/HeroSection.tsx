import { motion } from 'framer-motion';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-yellow-100 px-6 py-16 md:px-20">
            <div className="flex w-full max-w-7xl flex-col items-center gap-10 md:flex-row">
                {/* Text Content */}
                <motion.div
                    className="flex-1 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl leading-tight font-extrabold text-blue-900 md:text-6xl">
                        Elevate Your Look at <br />
                        ✂️ <span className="text-yellow-400">UltraCare</span> Barbing Salon
                    </h1>
                    <p className="text-lg text-blue-800 md:text-xl">
                        Experience top-notch grooming in a modern and relaxing space. Fresh fades, clean cuts — we do it all with care.
                    </p>
                    <button className="mt-6 inline-block rounded bg-blue-900 px-6 py-2 font-semibold text-white transition hover:bg-blue-800">
                        Book an Appointment
                    </button>
                </motion.div>

                {/* Hero Image */}
                <motion.div className="flex-1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <img
                        src= "/images/Heroimg.jpg"
                        alt="Barbing Hero"
                        className="h-190 w-250 rounded-xl object-cover shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
