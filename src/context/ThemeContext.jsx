import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        localStorage.setItem('theme', theme)

        // Apply theme to document
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
            document.body.style.backgroundColor = '#0a0e19'
            document.body.style.color = '#ffffff'
        } else {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
            document.body.style.backgroundColor = '#f5f5f5'
            document.body.style.color = '#1a1a1a'
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
