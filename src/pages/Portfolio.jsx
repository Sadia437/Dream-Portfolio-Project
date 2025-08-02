import React from 'react';

export default function Portfolio() {
    const projects = [
        {
            name: 'E-commerce Website',
            description: 'Full stack e-commerce app built with React and Node.js.',
            url: '#',
        },
        {
            name: 'Portfolio Website',
            description: 'Personal portfolio site to showcase projects.',
            url: '#',
        },
        {
            name: 'Blog Platform',
            description: 'A blogging platform with React and Firebase.',
            url: '#',
        },
    ];

    return (
        <section className="py-16 px-6 flex justify-center items-center">
            <div className="w-full max-w-6xl bg-white/20 border border-white/40 rounded-2xl p-10">
                <h2 className="text-4xl font-bold mb-8 text-white text-center">My Portfolio</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map(({ name, description, url }) => (
                        <a
                            key={name}
                            href={url}
                            className="block border border-white/50 rounded-lg p-6 bg-white/10 hover:bg-white/20 transition shadow text-white"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                            <p className="text-white/80">{description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
