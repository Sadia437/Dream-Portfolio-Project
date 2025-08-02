import React from 'react';

export default function PricingSection() {
    const plans = [
        { name: 'Basic', price: '$100', features: ['1 Website', 'Basic Support'] },
        { name: 'Standard', price: '$300', features: ['3 Websites', 'Priority Support'] },
        { name: 'Premium', price: '$600', features: ['Unlimited Websites', '24/7 Support'] },
    ];

    return (
        <section className="py-16 px-6 mb-10 max-w-5xl mx-auto rounded-lg shadow-lg bg-white/20 border border-white/30">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {plans.map(({ name, price, features }) => (
                    <div
                        key={name}
                        className="border border-white/30 rounded p-6 shadow hover:shadow-lg transition cursor-default bg-white/10"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
                        <p className="text-yellow-400 text-2xl font-bold mb-4">{price}</p>
                        <ul className="mb-4 list-disc list-inside text-white">
                            {features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 transition">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>

    );
}
