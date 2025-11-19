// Lightweight AI client wrapper — supports OpenAI (key in REACT_APP_OPENAI_KEY)

export async function askAI(prompt) {
    const openaiKey = import.meta.env.VITE_API_URL
    console.log("The Prompt is: ", typeof(prompt));
    console.log("The OpenAI Key is: ", import.meta.env.VITE_API_URL);


    if (openaiKey) {
        // call OpenAI Chat Completions (must provide key)
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${openaiKey}` },
            body: JSON.stringify({ model: 'openai/gpt-oss-20b:free', messages: [{ role: 'user', content: prompt } ] })
        })
        if (!res.ok) console.log('OpenAI request failed', res);
        console.log("The Response is: ", res);
        const data = await res.json()
        console.log("The Response is: ", data);
        return data.choices?.[0]?.message?.content || ''
    }

    throw new Error('No AI API key configured. Set REACT_APP_OPENAI_KEY in env.')
}
