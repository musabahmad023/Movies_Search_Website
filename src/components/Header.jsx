import React from 'react'
import Navbar from './Navbar'

export default function Header({ onNavigate }) {
    return (
        <header className="sticky top-0 w-full z-50 backdrop-blur-md bg-[rgba(6,10,15,0.45)] border-b border-[rgba(255,255,255,0.03)]">
            <div className="container-narrow mx-auto flex items-center justify-between p-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white">Movie Browser</h1>

                <Navbar onNavigate={onNavigate} />
            </div>
        </header>
    )
}
