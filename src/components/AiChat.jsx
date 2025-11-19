import React, { useState } from 'react'
import { askAI } from '../services/ai'

export default function AiChat() {
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
        <div className="card-surface p-4">
            <h3 className="font-semibold mb-2">Ask AI</h3>
            <form onSubmit={handleAsk} className="space-y-2">
                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ask anything..." rows={3} className="w-full p-2 rounded bg-transparent border border-[rgba(255,255,255,0.04)]" />
                <div className="flex gap-2">
                    <button type="submit" disabled={loading} className="px-3 py-2 bg-indigo-600 rounded">{loading ? 'Thinking...' : 'Ask'}</button>
                    <button type="button" onClick={() => { setPrompt(''); setResponse(''); setError(null) }} className="px-3 py-2 bg-transparent border border-[rgba(255,255,255,0.04)] rounded">Clear</button>
                </div>
            </form>

            {error && <div className="mt-2 text-red-400">{error}</div>}
            {response && <pre className="mt-2 whitespace-pre-wrap text-sm bg-black/50 p-3 rounded">{response}</pre>}
        </div>
    )
}
