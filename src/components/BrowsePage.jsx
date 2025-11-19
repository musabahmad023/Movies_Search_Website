import React, { useEffect, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import MovieCard from './MovieCard'
import Footer from './Footer'
import ControlPanel from './ControlPanel'
import AiChat from './AiChat'
import FeedbackForm from './FeedbackForm'
import { useTheme } from '../context/ThemeContext'

// OMDB API key (per user's request)
const OMDB_API_KEY = '1bd2f525'

export default function BrowsePage({ movies, onSelect, onNavigate, searchTerm, setSearchTerm }) {
    const { theme } = useTheme()
    const [searchResults, setSearchResults] = useState(null)
    const [searchLoading, setSearchLoading] = useState(false)
    const [searchError, setSearchError] = useState(null)

    useEffect(() => {
        // when there's no search term, clear API results and show local movies
        if (!searchTerm || !searchTerm.trim()) {
            setSearchResults(null)
            setSearchLoading(false)
            setSearchError(null)
            return
        }

        let mounted = true
        async function fetchOmdbAllPages(q) {
            setSearchLoading(true)
            setSearchError(null)
            try {
                // first page fetch to get totalResults
                const first = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(q)}&apikey=${OMDB_API_KEY}&page=1`)
                const json = await first.json()
                if (!mounted) return

                if (json.Response === 'False') {
                    setSearchResults([])
                    setSearchLoading(false)
                    return
                }

                const total = parseInt(json.totalResults || '0', 10)
                const perPage = 10 // OMDB returns 10 results per page
                const pages = Math.min(Math.ceil(total / perPage), 5) // cap to 5 pages (up to 50 results)

                const all = [...(json.Search || [])]

                // fetch remaining pages (2..pages)
                const promises = []
                for (let p = 2; p <= pages; p++) {
                    promises.push(fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(q)}&apikey=${OMDB_API_KEY}&page=${p}`).then((r) => r.json()))
                }

                const rest = await Promise.all(promises)
                if (!mounted) return
                rest.forEach((r) => {
                    if (r && r.Response !== 'False' && Array.isArray(r.Search)) {
                        all.push(...r.Search)
                    }
                })

                // map OMDB search items to a shape usable by MovieCard
                const mapped = all.map((it) => ({
                    id: it.imdbID,
                    title: it.Title,
                    img: it.Poster && it.Poster !== 'N/A' ? it.Poster : 'https://via.placeholder.com/300x420?text=No+Poster',
                    year: it.Year,
                    type: it.Type,
                    source: 'omdb'
                }))

                setSearchResults(mapped)
            } catch (err) {
                if (!mounted) return
                setSearchError(err.message || String(err))
                setSearchResults([])
            } finally {
                if (mounted) setSearchLoading(false)
            }
        }

        fetchOmdbAllPages(searchTerm)

        return () => {
            mounted = false
        }
    }, [searchTerm])

    // decide what to render: local sample movies (when no search), or OMDB results when searching
    const showingOmdb = Array.isArray(searchResults)
    const showingMovies = showingOmdb ? searchResults : movies

    return (
        <div className={`min-h-screen font-[Poppins] transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            <Header onNavigate={onNavigate} />

            <main className="py-16 grid place-items-center gap-12">
                <Hero />

                <div id="browse" className="w-full container-narrow px-6 flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <ControlPanel searchValue={searchTerm} onSearchChange={setSearchTerm} />

                        {searchLoading && (
                            <div className={`text-center mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Searching OMDB...</div>
                        )}

                        {searchError && (
                            <div className="text-center text-red-400 mb-6">Error: {searchError}</div>
                        )}

                        {!showingOmdb && (
                            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                {showingMovies.map((movie) => (
                                    <div key={movie.id} className="flex justify-center">
                                        <MovieCard title={movie.title} img={movie.img || movie.poster} onClick={() => onSelect(movie)} />
                                    </div>
                                ))}
                            </div>
                        )}

                        {showingOmdb && (
                            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                {showingMovies.length === 0 && !searchLoading ? (
                                    <div className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>No results found on OMDB for "{searchTerm}"</div>
                                ) : (
                                    showingMovies.map((m) => (
                                        <div key={m.id} className="flex justify-center">
                                            {/* For OMDB results, open IMDb page on click */}
                                            <MovieCard title={`${m.title} (${m.year || ''})`} img={m.img} onClick={() => window.open(`https://www.imdb.com/title/${m.id}`, '_blank')} />
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>

                    <aside className="w-full md:w-80 space-y-6">
                        <AiChat />
                        <FeedbackForm />
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    )
}
