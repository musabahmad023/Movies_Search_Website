import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Hero({ title = 'Browse Our Collection' }) {
    const { theme } = useTheme()

    return (
        <div className={`rounded-2xl shadow-lg backdrop-blur-md p-8 max-w-3xl text-center space-y-4 transition-colors duration-300 border ${theme === 'dark'
                ? 'bg-[#222]/80 border-red-600 shadow-red-600/30'
                : 'bg-white/90 border-gray-300'
            }`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 drop-shadow-[0_2px_8px_rgba(229,9,20,0.4)]">{title}</h2>
            <p className={`text-sm md:text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Discover a curated collection of movies — filter, search, and open detailed views. Use the Ask AI panel for suggestions.</p>
            <div className="flex items-center justify-center gap-3">
                <a className="px-4 py-2 bg-red-600 rounded-md text-white font-semibold shadow-md hover:scale-[1.02] transition" href="#browse">Browse Now</a>
                <a className={`px-3 py-2 rounded-md text-sm transition border ${theme === 'dark'
                        ? 'bg-transparent border-gray-700 text-gray-200 hover:bg-gray-700'
                        : 'bg-gray-100 border-gray-400 text-gray-900 hover:bg-gray-200'
                    }`} href="https://www.youtube.com/watch?v=YoHD9XEInc0" target="_blank" rel="noreferrer">Watch Inception Trailer</a>
            </div>
        </div>
    )
}
