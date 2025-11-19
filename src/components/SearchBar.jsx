import React from 'react'

export default function SearchBar({ value, onChange, placeholder = 'Search movies...' }) {
    return (
        <div className="w-full max-w-lg">
            <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] text-white placeholder:opacity-60" placeholder={placeholder} />
        </div>
    )
}
