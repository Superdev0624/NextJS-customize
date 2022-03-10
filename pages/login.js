import { useRouter } from "next/router"
import { useEffect, useCallback } from "react"

const useUser = () => ({user:null, loading:false })

export default function Login() {
  const {user,loading} = useUser()
  const router = useRouter()
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    fetch('/api/login', {
      method:'POST',
      headers:{ 'Content-Type': 'application/json'},
      body:JSON.stringify({

      }),
    }).then((res) => {
      if (res.ok) router.push('/dashboard')
    })
  }, [])

  useEffect(() =>{
    router.prefetch('/dashboard')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder = "name"></input>
      <input type="password" name = "password" placeholder ="password"></input>
      <button type="submit">Login</button>
    </form>
  )
}