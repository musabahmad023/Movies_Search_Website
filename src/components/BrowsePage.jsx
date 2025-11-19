import React from 'react'
import Header from './Header'
import Hero from './Hero'
import MovieCard from './MovieCard'
import Footer from './Footer'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import AiChat from './AiChat'
import FeedbackForm from './FeedbackForm'

export default function BrowsePage({ movies, onSelect, onNavigate, searchTerm, setSearchTerm }) {
    return (
        <div className="min-h-screen text-white font-[Poppins]">
            <Header onNavigate={onNavigate} />

            <main className="py-16 grid place-items-center gap-12">
                <Hero />

                <div id="browse" className="w-full container-narrow px-6 flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-6 gap-4">
                            <SearchBar value={searchTerm} onChange={setSearchTerm} />
                            <ThemeToggle />
                        </div>

                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {movies.map((movie) => (
                                <div key={movie.id} className="flex justify-center">
                                    <MovieCard title={movie.title} img={movie.img || movie.poster} onClick={() => onSelect(movie)} />
                                </div>
                            ))}
                        </div>
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
