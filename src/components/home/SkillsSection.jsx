import React from 'react';

export default function SkillsSection() {
    const skills = [
        { name: 'React', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 80 },
        { name: 'HTML', percentage: 95 },
        { name: 'CSS', percentage: 90 },
        { name: 'Git', percentage: 70 },
    ];

    return (
        <section className="relative mb-30 py-20 px-6 max-w-5xl mx-auto text-white z-10">
            <div className="border border-white/40 rounded-2xl p-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">My Skills</h2>
                    <p className="text-lg">আমি যেসব স্কিলে দক্ষ</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map(({ name, percentage }) => {
                        const shortHeightSkills = ['React', 'JavaScript', 'Tailwind CSS'];
                        const isShort = shortHeightSkills.includes(name);

                        return (
                            <div
                                key={name}
                                className={`bg-transparent border border-white/30 p-6 rounded-lg w-full ${isShort ? 'min-h-[80px]' : 'min-h-[40px]'
                                    } flex flex-col justify-center items-center text-center`}
                            >
                                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                                <div
                                    className="w-full h-2 rounded-full overflow-hidden mb-1 border border-white/20"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                                >
                                    <div
                                        className="h-30 bg-indigo-500 rounded-full transition-all duration-500"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm">{percentage}%</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
