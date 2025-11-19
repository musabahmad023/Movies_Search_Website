import { useTheme } from '../context/ThemeContext'

// Consolidated SearchBar + ThemeToggle component
export default function ControlPanel({ searchValue, onSearchChange, placeholder = 'Search movies...' }) {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex items-center justify-between mb-6 gap-4 w-full flex-col sm:flex-row">
            {/* Search Bar */}
            <div className="w-full max-w-lg">
                <input
                    value={searchValue}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors ${theme === 'dark'
                            ? 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.04)] text-white placeholder:opacity-60'
                            : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400'
                        }`}
                    placeholder={placeholder}
                />
            </div>

            {/* Theme Toggle */}
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`px-3 py-2 rounded-md border text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${theme === 'dark'
                        ? 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.04)] text-white hover:bg-[rgba(255,255,255,0.08)]'
                        : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200'
                    }`}
            >
                <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
                <span className="hidden sm:inline text-white">{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
        </div>
    )
}
