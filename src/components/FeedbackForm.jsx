import React, { useState } from 'react'
import { addFeedback } from '../services/firebase'
import { useTheme } from '../context/ThemeContext'

export default function FeedbackForm() {
    const { theme } = useTheme()
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
        <form onSubmit={handleSubmit} className={`card-surface p-4 w-full rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-[#222]/80 border border-gray-700' : 'bg-white border border-gray-300'
            }`}>
            <h3 className={`text-lg font-semibold mb-2 text-white`}>Send Feedback</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={`w-full p-2 mb-2 rounded transition-colors ${theme === 'dark'
                    ? 'bg-transparent border border-[rgba(255,255,255,0.04)] text-white placeholder:text-gray-400'
                    : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500'
                }`} />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={4} className={`w-full p-2 mb-2 rounded transition-colors ${theme === 'dark'
                    ? 'bg-transparent border border-[rgba(255,255,255,0.04)] text-white placeholder:text-gray-400'
                    : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500'
                }`} />
            <div className="flex gap-2 items-center">
                <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Send</button>
                <div className={`text-sm transition-colors text-white`}>
                    {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent — thanks!' : status === 'error' ? 'Error' : ''}
                </div>
            </div>
        </form>
    )
}
