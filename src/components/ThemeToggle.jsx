import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        if (theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }, [theme])

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-2 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] text-sm flex items-center gap-2">
            <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
            <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
    )
}
