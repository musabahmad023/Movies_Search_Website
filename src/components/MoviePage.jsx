import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams, useNavigate } from 'react-router-dom'

export default function MoviePage({ movies = [] }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const movie = movies.find((m) => String(m.id) === String(id))

    if (!movie) return (
        <div className="min-h-screen text-white font-[Poppins]"><Header onNavigate={(p) => { if (p === 'browse') navigate('/browse'); else if (p === 'home') navigate('/'); }} /><main className="py-16 container-narrow mx-auto px-6"><p className="text-center">Movie not found.</p></main><Footer /></div>
    )

    return (
        <div className="min-h-screen text-white font-[Poppins]">
            <Header onNavigate={(p) => { if (p === 'browse') navigate('/browse'); else if (p === 'home') navigate('/'); }} />

            <main className="py-16 grid place-items-center gap-8">
                <div className="max-w-4xl bg-[#222]/80 border border-red-600 rounded-2xl shadow-lg shadow-red-600/30 backdrop-blur-md p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <img src={movie.img} alt={movie.title} className="w-64 h-96 object-cover rounded-xl border-4 border-red-600 shadow-md" />

                        <div className="flex-1 text-left">
                            <h2 className="text-4xl font-extrabold text-red-600 mb-4">{movie.title}</h2>
                            <p className="mb-6">{movie.description || 'No description available.'}</p>

                            <div className="flex gap-4">
                                <button onClick={() => navigate(-1)} className="px-4 py-2 rounded-md bg-red-600 font-semibold">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
