import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-transparent text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                <div>
                    <h1 className="text-xl font-semibold mb-4">Contact Us</h1>
                    <ul className="space-y-2 text-sm">
                        <li>Email: info@example.com</li>
                        <li>Phone: +1215665 5665</li>
                        <li>
                            <address className="not-italic">My address 123 Street</address>
                        </li>
                    </ul>
                </div>
                <div className="md:flex md:flex-col md:items-center">
                    <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
                        <li><Link to="/services" className="hover:text-yellow-400 transition">Services</Link></li>
                        <li><Link to="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link></li>
                        <li><Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-semibold mb-4">Follow Us</h1>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-400 transition justify-center md:justify-start"
                            >
                                <FaFacebook /> Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-400 transition justify-center md:justify-start"
                            >
                                <FaYoutube /> YouTube
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-400 transition justify-center md:justify-start"
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
