import React, { useState } from 'react';
import PasswordInput from '../components/PasswordInput';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', password: '', message: '' });
    }

    return (
        <section id="contact" className="py-16 px-6 bg-transparent max-w-3xl mx-auto rounded shadow">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>
            {submitted && (
                <p className="mb-6 text-green-400 font-semibold text-center">
                    Thank you for your message! I will get back to you soon.
                </p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="p-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="p-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />

                <PasswordInput
                    value={formData.password}
                    onChange={handleChange}
                    inputClassName="p-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="p-3 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
