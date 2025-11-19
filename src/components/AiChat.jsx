import React, { useState } from 'react'
import { askAI } from '../services/ai'
import { useTheme } from '../context/ThemeContext'

export default function AiChat() {
    const { theme } = useTheme()
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function handleAsk(e) {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const res = await askAI(prompt)
            setResponse(res)
        } catch (err) {
            console.log(err);
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`card-surface p-4 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-[#222]/80 border border-gray-700' : 'bg-white border border-gray-300'
            }`}>
            <h3 className="font-semibold mb-2 text-white">Ask AI</h3>
            <form onSubmit={handleAsk} className="space-y-2">
                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ask anything..." rows={3} className={`w-full p-2 rounded transition-colors ${theme === 'dark'
                        ? 'bg-transparent border border-[rgba(255,255,255,0.04)] text-white placeholder:text-gray-400'
                        : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500'
                    }`} />
                <div className="flex gap-2">
                    <button type="submit" disabled={loading} className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition disabled:opacity-50">{loading ? 'Thinking...' : 'Ask'}</button>
                    <button type="button" onClick={() => { setPrompt(''); setResponse(''); setError(null) }} className={`px-3 py-2 rounded transition ${theme === 'dark'
                            ? 'bg-transparent border border-[rgba(255,255,255,0.04)] text-white hover:bg-gray-700'
                            : 'bg-gray-100 border border-gray-300 text-gray-400 hover:bg-gray-200'
                        }`}>Clear</button>
                </div>
            </form>

            {error && <div className="mt-2 text-red-400">{error}</div>}
            {response && <pre className={`mt-2 whitespace-pre-wrap text-sm p-3 rounded transition-colors ${theme === 'dark' ? 'bg-black/50 text-gray-100' : 'bg-gray-100 text-gray-900'
                }`}>{response}</pre>}
        </div>
    )
}
