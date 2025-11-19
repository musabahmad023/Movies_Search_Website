import { useState } from 'react'
import UserForm from './components/UserForm'
import UserProfile from './components/UserProfile'

function App() {
  const [user, setUser] = useState(null);

  const handleUserSubmit = (userData) => {
    setUser(userData);
  };

  return (
    <div className="flex flex-col items-center gap-8 px-4 py-8 min-h-screen bg-gray-50 w-full">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">GitHub User Profile Finder</h1>
      <UserForm onSubmit={handleUserSubmit} />
      <UserProfile user={user} />
    </div>
  )
}

export default App
