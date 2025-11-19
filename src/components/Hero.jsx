import React from 'react'

export default function Hero({ title = 'Browse Our Collection' }) {
    return (
        <div className="bg-[#222]/80 border border-red-600 rounded-2xl shadow-lg shadow-red-600/30 backdrop-blur-md p-8 max-w-3xl text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 drop-shadow-[0_2px_8px_rgba(229,9,20,0.4)]">{title}</h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">Discover a curated collection of movies — filter, search, and open detailed views. Use the Ask AI panel for suggestions.</p>
            <div className="flex items-center justify-center gap-3">
                <a className="px-4 py-2 bg-red-600 rounded-md text-white font-semibold shadow-md hover:scale-[1.02]" href="#browse">Browse Now</a>
                <a className="px-3 py-2 bg-transparent border border-gray-700 rounded-md text-sm text-gray-200" href="https://www.youtube.com/watch?v=YoHD9XEInc0" target="_blank" rel="noreferrer">Watch Inception Trailer</a>
            </div>
        </div>
    )
}
