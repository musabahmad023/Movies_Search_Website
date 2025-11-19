import { useState } from 'react';

function UserForm({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim()) {
            setError('Please enter a username');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`https://api.github.com/search/users?q=${username}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('User not found');
            }

            const data = await response.json();
            onSubmit(data);
            setUsername('');
        } catch (err) {
            setError(err.message);
            onSubmit(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-screen max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
                        GitHub Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter GitHub username"
                        disabled={loading}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold cursor-pointer transition-colors duration-300 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {error && (
                <p className="mt-4 px-3 py-3 text-red-600 bg-red-50 rounded-lg font-medium">
                    {error}
                </p>
            )}
        </div>
    );
}

export default UserForm;
