import React from 'react';
import { Link } from 'react-router-dom';  // Link ইমপোর্ট করতে হবে
import ParticlesBackground from '../ParticlesBackground';

export default function CallToActionSection() {
    return (
        <section className="relative mb-30 w-full py-16 px-4 flex justify-center items-center bg-transparent overflow-hidden">
            <div className="relative w-full max-w-4xl border border-white/40 rounded-2xl p-10 z-10 text-center">
                <div className="absolute inset-0 -z-10">
                    <ParticlesBackground />
                </div>
                <h2 className="text-3xl font-semibold text-white mb-6">Ready to start your project?</h2>
                <Link
                    to="/contact"
                    className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition"
                >
                    Contact Me Now
                </Link>
            </div>
        </section>
    );
}
