import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function PasswordInput({ value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full">
            <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter Password"
                value={value}
                onChange={onChange}
                required
                className="w-full p-3 rounded border border-white bg-transparent text-white placeholder-white pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-white hover:text-indigo-400"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
                {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
            </button>
        </div>
    );
}
