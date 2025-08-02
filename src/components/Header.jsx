import React from 'react';
import { NavLink } from 'react-router-dom';
import developPhoto from '../assets/develop 2.jfif';

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
];

export default function Header() {
    return (
        <header className="bg-gray-800 h-20 text-white sticky top-0 z-50 flex items-center">
            <nav className="container mx-auto flex justify-between items-center w-full px-4">
                <NavLink to="/" className="flex items-center space-x-3 hover:text-yellow-400 transition">
                    <img
                        src={developPhoto}
                        alt="Developer"
                        className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
                    />
                    <span className="text-2xl font-bold">MyPortfolio</span>
                </NavLink>
                <ul className="flex space-x-6">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1"
                                        : "hover:text-yellow-400 transition pb-1 border-b-2 border-transparent"
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
