import { Link } from '@inertiajs/react';
import React from 'react';
import HeroSection from '../components/HeroSection'
import MainSection from '@/components/MainSection';


const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-yellow-50 text-blue-900">
            <header className="sticky top-0 z-50 flex items-center justify-between bg-yellow-400 px-10 py-6 shadow-md transition-all duration-500 ease-in-out hover:shadow-xl md:px-20">
                <Link href="/" className="transform text-3xl font-extrabold tracking-wide text-blue-900 transition duration-300 hover:scale-105">
                    ✂️ Ultra<span className="text-white">Care</span>
                </Link>
                <nav className="flex space-x-6 md:space-x-10">
                    <Link
                        href="/"
                        className="text-md rounded px-2 py-1 font-semibold text-blue-900 transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about-contact"
                        className="text-md rounded px-2 py-1 font-semibold text-blue-900 transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white"
                    >
                        About & Contact
                    </Link>
                </nav>
            </header>

            <div className="min-h-screen bg-yellow-50 text-blue-900">
                <HeroSection />
                <MainSection />
            </div>

            <main>
                {/* Why Choose Us Section */}
                <section className="bg-yellow-100 px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-blue-900">
                            Why Choose ✂️ Ultra<span className="rounded bg-blue-900 px-2 text-white">Care</span>?
                        </h2>
                        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-blue-800">
                            Discover why our barbershop is trusted by clients all over for style, quality, and comfort.
                        </p>
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <h4 className="mb-2 text-xl font-bold text-blue-900">💈 Experienced Barbers</h4>
                                <p className="text-blue-800">Our skilled barbers bring years of experience and creativity to every cut.</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <h4 className="mb-2 text-xl font-bold text-blue-900">🧼 Clean & Comfortable</h4>
                                <p className="text-blue-800">Enjoy a relaxing, sanitized environment designed for your comfort.</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <h4 className="mb-2 text-xl font-bold text-blue-900">💰 Affordable Prices</h4>
                                <p className="text-blue-800">Look good without breaking the bank—premium grooming at fair rates.</p>
                            </div>
                        </div>
                        <div className="mt-7 text-center">
                            <Link
                                href="/about-contact"
                                className="mt-6 inline-block rounded bg-blue-900 px-6 py-2 font-semibold text-white transition hover:bg-blue-800"
                            >
                                About Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-blue-900 px-4 py-6 text-center text-yellow-100">
                <p className="text-sm">&copy; {new Date().getFullYear()} UltraCare Barbing Salon. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
