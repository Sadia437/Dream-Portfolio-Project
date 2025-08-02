import React from 'react';

const ExperienceSection = () => {
    return (
        <section className="py-20 px-6 flex flex-col items-center justify-center text-center">
            <div className="bg-white/20 p-10 rounded-2xl shadow-lg max-w-3xl w-full border border-white/40">
                <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
                <ul className="text-lg text-white space-y-3">
                    <li>Frontend Developer at WebDev Co. (2022 - Present)</li>
                    <li>Intern at DesignStudio (2021 - 2022)</li>
                </ul>
            </div>
        </section>
    );
};

export default ExperienceSection;
