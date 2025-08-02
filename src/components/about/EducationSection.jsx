import React from 'react';

const EducationSection = () => {
    return (
        <section className="py-20 px-6 flex flex-col items-center justify-center text-center">
            <div className="bg-white/20 p-10 rounded-2xl shadow-lg max-w-3xl w-full border border-white/40">
                <h2 className="text-3xl text-white font-bold mb-6">Education</h2>
                <ul className="text-lg text-white space-y-3">
                    <li>B.Sc. in Computer Science - Dhaka University</li>
                    <li>Web Development Bootcamp - Eshikhon.com</li>
                </ul>
            </div>
        </section>
    );
};

export default EducationSection;
