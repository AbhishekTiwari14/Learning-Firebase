/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import { createContext, useContext } from "react"
import { useState, useEffect } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(true)
  const [loading, setLoading] = useState(true)

  // Set up a listener for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe // Clean up the listener on unmount
  }, [])

  // Google login function
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error("Google Sign-In Error:", error)
    }
  }

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Logout Error:", error)
    }
  }

  // Value provided by the AuthContext
  const value = {
    currentUser,
    loginWithGoogle,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// Custom hook to use AuthContext in other components
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
