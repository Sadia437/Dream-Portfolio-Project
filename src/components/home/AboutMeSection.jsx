import React from 'react';

export default function AboutMeSection() {
    return (
        <section className="relative mb-30 py-20 px-6 max-w-5xl mx-auto overflow-hidden z-10 text-white">
            <div className=" border border-white/40 p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
                <p className="max-w-3xl mx-auto leading-relaxed text-center">
                    আমি একজন ফ্রন্টএন্ড ডেভেলপার যিনি React, JavaScript, এবং Tailwind CSS দিয়ে সুন্দর ও দ্রুত ওয়েবসাইট তৈরি করি।
                </p>
            </div>
        </section>
    );
}
