import React from 'react';

export default function ServiceListSection() {
    const services = [
        { title: 'Web Development', description: 'Responsive and modern websites.' },
        { title: 'UI/UX Design', description: 'Clean and user-friendly design.' },
        { title: 'Consultation', description: 'Project planning and advice.' },
    ];

    return (
        <section className="py-16 mb-10 px-6 max-w-5xl mx-auto rounded-lg shadow-lg bg-white/20 border border-white/30">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {services.map(({ title, description }) => (
                    <div key={title} className="border border-white/30 p-6 rounded shadow hover:shadow-lg transition cursor-default bg-white/10">
                        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                        <p className="text-white">{description}</p>
                    </div>
                ))}
            </div>
        </section>

    );
}
