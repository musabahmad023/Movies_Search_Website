import React, { useState } from 'react'
import { addFeedback } from '../services/firebase'

export default function FeedbackForm() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('sending')
        try {
            await addFeedback(name, message)
            setStatus('sent')
            setName('')
            setMessage('')
        } catch (err) {
            setStatus('error')
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card-surface p-4 w-full">
            <h3 className="text-lg font-semibold mb-2">Send Feedback</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full p-2 mb-2 rounded bg-transparent border border-[rgba(255,255,255,0.04)]" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={4} className="w-full p-2 mb-2 rounded bg-transparent border border-[rgba(255,255,255,0.04)]" />
            <div className="flex gap-2 items-center">
                <button type="submit" className="px-4 py-2 bg-red-600 rounded">Send</button>
                <div className="text-sm text-gray-300">{status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent — thanks!' : status === 'error' ? 'Error' : ''}</div>
            </div>
        </form>
    )
}
