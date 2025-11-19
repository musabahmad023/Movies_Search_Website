import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from '../components/HomePage'
import BrowsePage from '../components/BrowsePage'
import MoviePage from '../components/MoviePage'

export default function RouterView({ movies, rawMovies, setSearch, search, externalData, loading, error }) {
    const navigate = useNavigate()

    function onNavigate(page) {
        if (!page) return
        const p = String(page).toLowerCase()
        if (p === 'home') navigate('/')
        else if (p === 'browse') navigate('/browse')
        else navigate(page)
    }

    function handleSelect(movie) {
        if (!movie) return
        navigate(`/movie/${movie.id}`)
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage movies={movies} onSelect={handleSelect} onNavigate={onNavigate} />} />
            <Route path="/browse" element={<BrowsePage movies={movies} onSelect={handleSelect} onNavigate={onNavigate} searchTerm={search} setSearchTerm={setSearch} externalData={externalData} loading={loading} error={error} />} />
            <Route path="/movie/:id" element={<MoviePage movies={rawMovies} />} />
        </Routes>
    )
}
