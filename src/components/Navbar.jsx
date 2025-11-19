import React from 'react'

export default function Navbar({ onNavigate }) {
    return (
        <nav className="flex gap-4">
            <button onClick={() => onNavigate('home')} className="px-4 py-2 rounded-md font-semibold transition border border-transparent hover:bg-red-600 hover:shadow-md hover:-translate-y-1">Home</button>
            <button onClick={() => onNavigate('browse')} className="px-4 py-2 rounded-md bg-red-600 font-semibold shadow-md -translate-y-[1px]">Browse</button>
        </nav>
    )
}
