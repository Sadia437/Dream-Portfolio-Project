import React from 'react';
import { Link } from 'react-router-dom';
import AutoTypeText from '../AutoTypeText';
import ParticlesBackground from '../ParticlesBackground';

export default function HeroSection() {
    return (
        <section className="relative h-auto mb-50  flex flex-col justify-center items-center text-white px-4 text-center overflow-hidden">
            <ParticlesBackground />
            <div className="relative z-10 border border-white/40 rounded-2xl p-10 max-w-3xl w-full">
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <AutoTypeText />

                <p className="text-xl max-w-xl mb-6">
                    আমি একজন Creative Web Developer — React & Tailwind CSS নিয়ে কাজ করি।
                </p>

                <Link
                    to="/contact"
                    className="px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
                >
                    Contact Me
                </Link>
            </div>
        </section>
    );
}
