import React from 'react';

export default function PortfolioSection() {
    return (
        <section className="relative mb-30 py-20 px-6 max-w-5xl mx-auto text-white z-10">
            <div className="border border-white/40 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-center mb-10">My Portfolio</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-transparent border border-white/30 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                        <p>ওয়েবসাইটের বর্ণনা</p>
                    </div>
                    <div className="bg-transparent border border-white/30 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                        <p>অন্য একটি প্রজেক্ট</p>
                    </div>
                    <div className="bg-transparent border border-white/30 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Project 3</h3>
                        <p>আরো একটি ওয়েব অ্যাপ</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
