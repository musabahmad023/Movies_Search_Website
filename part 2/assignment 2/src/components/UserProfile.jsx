function UserProfile({ user }) {
    if (!user) return null;

    // Handle both search results (with items array) and direct user object
    const users = user.items || [user];

    return (
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((singleUser, index) => (
                <div key={singleUser.id || index} className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                    <img
                        src={singleUser.avatar_url}
                        alt={singleUser.login}
                        className="w-36 h-36 rounded-full border-4 border-blue-600 mx-auto mb-4 object-cover"
                    />
                    <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-1">{singleUser.login}</h2>
                    <p className="text-gray-600 text-lg mb-4">@{singleUser.login}</p>

                    {singleUser.bio && <p className="text-gray-700 text-sm mb-4 italic">{singleUser.bio}</p>}

                    <div className="text-left bg-gray-50 rounded-lg p-4 my-4 space-y-2">
                        {singleUser.location && (
                            <p className="text-gray-800"><strong>Location:</strong> {singleUser.location}</p>
                        )}
                        {singleUser.company && (
                            <p className="text-gray-800"><strong>Company:</strong> {singleUser.company}</p>
                        )}
                        {singleUser.created_at && (
                            <p className="text-gray-800"><strong>Joined:</strong> {new Date(singleUser.created_at).toLocaleDateString()}</p>
                        )}
                        <p className="text-gray-800"><strong>Type:</strong> {singleUser.type}</p>
                    </div>

                    {singleUser.html_url && (
                        <a
                            href={singleUser.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-700"
                        >
                            View on GitHub
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UserProfile;
