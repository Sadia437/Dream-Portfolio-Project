import React from 'react';

const AboutMeSection = () => {
    return (
        <section className="py-20 px-6 flex flex-col items-center justify-center text-center">
            <div className="bg-white/20 p-10 rounded-2xl shadow-lg max-w-3xl w-full border border-white/40">
                <h2 className="text-4xl text-white font-bold mb-6">About Me</h2>
                <p className="text-lg text-white leading-relaxed">
                    I'm a passionate web developer with experience in building modern websites using React and Tailwind CSS.
                </p>
            </div>
        </section>
    );
};

export default AboutMeSection;
