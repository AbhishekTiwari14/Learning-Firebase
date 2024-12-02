import { useEffect } from "react"
import { useAuth } from "./contexts/AuthContext"

function App() {
  const { currentUser, loginWithGoogle, logout } = useAuth()
  useEffect(() => {
    console.log("User profile photo URL:", currentUser)
  }, [currentUser])
  return (
    <>
      <header>
        <h1>Google Docs Clone</h1>
        {currentUser ? (
          <button onClick={logout}> Logout</button>
        ) : (
          <button onClick={loginWithGoogle}> Login/Signup</button>
        )}
      </header>
    </>
  )
}

export default App
