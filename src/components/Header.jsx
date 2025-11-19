import React from 'react'
import { useTheme } from '../context/ThemeContext'

// Consolidated Header with integrated Navbar
export default function Header({ onNavigate }) {
    const { theme } = useTheme()

    return (
        <header className={`sticky top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark'
                ? 'bg-[rgba(6,10,15,0.45)] border-[rgba(255,255,255,0.03)]'
                : 'bg-white/80 border-gray-300'
            }`}>
            <div className="container-narrow mx-auto flex items-center justify-between p-4">
                <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-wider ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Movie Browser</h1>

                {/* Navbar (merged) */}
                <nav className="flex gap-4">
                    <button
                        onClick={() => onNavigate('home')}
                        className={`px-4 py-2 rounded-md font-semibold transition border border-transparent hover:bg-red-600 hover:shadow-md hover:-translate-y-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => onNavigate('browse')}
                        className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold shadow-md -translate-y-px hover:bg-red-700 transition"
                    >
                        Browse
                    </button>
                </nav>
            </div>
        </header>
    )
}
