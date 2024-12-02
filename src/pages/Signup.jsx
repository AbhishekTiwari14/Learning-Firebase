import { useState } from "react"


export function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignup(){

  }

  return (
    <>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Signup</button>
    </>
  )
}
