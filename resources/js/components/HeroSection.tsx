import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative h-[85vh] overflow-hidden md:h-[70vh]">
            {/* Background Hero Image */}
            <img
                src="/images/Heroimg01.jpg"
                alt="Barbershop hero"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            {/* <div className="bg-opacity-60 absolute inset-0 bg-blue-900"></div> */}

            {/* Hero Text Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl text-white"
                >
                    <h1 className="text-5xl leading-tight font-extrabold text-yellow-400 md:text-6xl">
                        Elevate Your Look at <br />
                        <span className="text-blue-900">UltraCare</span> Barbing Salon
                    </h1>
                    <p className="text-lg font-bold text-yellow-100 mt-6 md:text-xl">
                        Experience top-notch grooming in a modern and relaxing space. Fresh fades, clean cuts — we do it all with care.
                    </p>
                    <Link
                        href="/about-contact"
                        className="mt-20 inline-block rounded bg-blue-900 px-6 py-2 font-semibold text-white transition hover:bg-blue-800"
                    >
                        Book an Appointment
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

