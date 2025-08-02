import React from 'react';

export default function ServicesSection() {
    return (
        <section className="relative mb-30 py-20 px-6 max-w-5xl mx-auto text-white z-10">
            <div className="border border-white/40 rounded-2xl p-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">My Services</h2>
                    <p className="text-lg">আপনার প্রজেক্টের জন্য যেসব সার্ভিস আমি দেই</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-transparent border border-white/30 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                        <p>রেসপন্সিভ ও ইউজার-ফ্রেন্ডলি ডিজাইন</p>
                    </div>
                    <div className="bg-transparent border border-white/30 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">React Development</h3>
                        <p>React দিয়ে SPA এবং ইন্টার‍্যাকটিভ ওয়েব অ্যাপ</p>
                    </div>
                    <div className="bg-transparent border border-white/30 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                        <p>দ্রুত ও কাস্টমাইজেবল ইউআই স্টাইলিং</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
