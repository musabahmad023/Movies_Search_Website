import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
    const { theme } = useTheme()

    return (
        <footer className="mt-12">
            <div className={`container-narrow mx-auto text-center py-6 text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>&copy; 2025 Movie Browser</div>
        </footer>
    )
}
