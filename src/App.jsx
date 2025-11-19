import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RouterView from './router/RouterView'
import { useEffect, useState } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [externalData, setExternalData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // load local JSON data
    async function load() {
      try {
        const res = await fetch('/src/data/movies.json')
        if (!res.ok) throw new Error('Failed to load local movies.json')
        const data = await res.json()
        setMovies(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()

    // example external API fetch (public sample API)
    fetch('https://api.sampleapis.com/movies/action')
      .then((r) => r.json())
      .then((d) => setExternalData(d.slice(0, 6)))
      .catch(() => setExternalData(null))
  }, [])

  const filtered = movies.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <BrowserRouter>
      <RouterView movies={filtered} rawMovies={movies} setSearch={setSearch} search={search} externalData={externalData} loading={loading} error={error} />
    </BrowserRouter>
  )
}

export default App
