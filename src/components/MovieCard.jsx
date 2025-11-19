import React, { useState } from 'react'

// Reusable MovieCard
// Props: { title, img, onClick }
export default function MovieCard({ title, img, onClick }) {
    const [loaded, setLoaded] = useState(false)

    return (
        <button onClick={onClick} className="bg-[#222]/90 border-2 border-red-600 rounded-2xl shadow-lg shadow-red-600/30 backdrop-blur-md transition transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden movie-card flex flex-col items-center">
            <div className="w-[300px] h-[420px] rounded-xl border-4 border-red-600 shadow-md shadow-red-600/40 my-4 bg-cover bg-center overflow-hidden relative flex-shrink-0">
                {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-gray-700 to-gray-800" />}
                <img loading="lazy" src={img} alt={title} onLoad={() => setLoaded(true)} className={`w-full h-full object-cover transition-transform ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            <div className="text-red-500 font-extrabold tracking-wider text-lg mb-4 drop-shadow-[0_2px_8px_rgba(229,9,20,0.4)]">{title}</div>
        </button>
    )
}
