import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import MovieCard from './MovieCard'

export default function HomePage({ movies = [], onSelect, onNavigate }) {
    const featured = movies?.[0]

    return (
        <div className="min-h-screen text-white font-[Poppins]">
            <Header onNavigate={onNavigate} />

            <main className="py-16">
                <div className="container-narrow mx-auto px-6">
                    <Hero title={featured ? `Featured — ${featured.title}` : 'Welcome to Movie Browser'} />

                    {featured && (
                        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="md:col-span-2 card-surface p-4">
                                <div className="flex flex-col md:flex-row gap-4 items-start">
                                    <div className="w-full md:w-72 movie-image">
                                        <img src={featured.img} alt={featured.title} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{featured.title}</h3>
                                        <p className="text-gray-300 mt-2">{featured.description}</p>
                                        <div className="mt-4 flex gap-2">
                                            <button onClick={() => onSelect(featured)} className="px-4 py-2 bg-red-600 rounded-md">View</button>
                                            <button onClick={() => onNavigate('browse')} className="px-3 py-2 border border-[rgba(255,255,255,0.04)] rounded-md">Browse</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <aside className="aside-stack">
                                <div className="card-surface p-4">
                                    <h4 className="font-semibold">Trailer</h4>
                                    <div className="mt-3 aspect-video overflow-hidden rounded">
                                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception Trailer" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>

                                <div className="card-surface p-4">
                                    <h4 className="font-semibold">Top Picks</h4>
                                    <div className="mt-3 grid grid-cols-2 gap-2">
                                        {movies.slice(0, 4).map((m) => (
                                            <button key={m.id} onClick={() => onSelect(m)} className="text-left text-sm">{m.title}</button>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </section>
                    )}

                    <section className="mt-12">
                        <h3 className="text-xl font-semibold mb-4">Explore Collection</h3>

                        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {movies.map((movie) => (
                                <div key={movie.id} className="flex justify-center">
                                    <MovieCard
                                        title={movie.title}
                                        img={movie.img || movie.poster}
                                        onClick={() => onSelect(movie)}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
