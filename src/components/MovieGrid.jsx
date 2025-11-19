import React from 'react'
import MovieCard from './MovieCard'

export default function MovieGrid({ movies = [], onSelect }) {
    return (
        <div className="grid w-full gap-8 px-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start">
            {movies.map((m, i) => (
                <MovieCard key={i} movie={m} onSelect={onSelect} />
            ))}
        </div>
    )
}
