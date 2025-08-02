import React from 'react';

export default function TestimonialsSection() {
    const testimonials = [
        { name: 'John Doe', text: 'Great work and very professional!' },
        { name: 'Jane Smith', text: 'Highly recommended for web projects.' },
        { name: 'Alice Johnson', text: 'Delivered on time with excellent quality.' },
    ];

    return (
        <section className="py-16 px-6 max-w-5xl mx-auto bg-white/20 border border-white/30 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-8 text-white text-center">Testimonials</h2>
            <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {testimonials.map(({ name, text }) => (
                    <div
                        key={name}
                        className="border border-white/30 rounded p-6 shadow bg-white/10 cursor-default hover:bg-white/20 transition duration-300"
                    >
                        <p className="italic text-white mb-4">❝ {text} ❞</p>
                        <p className="font-semibold text-yellow-400 text-right">- {name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
