import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    const [message,setMessage] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');

    const handleLogin = async (e) =>{
          e.preventDefault()
          const data = {
            email,
            password
          }
          
    }
  return (
    <section className='h-screen flex items-center justify-center'>
       <div className='max-w-sm border shadow bg-white mx-auto p-8'>
        <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
        <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
            <input onChange={(e) => setEmail(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3' type="email" name="email" id="email" placeholder='Email Address' required />
            <input onChange={(e) => setPassword(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3' type="password" name="password" id="password" placeholder='Enter Password' required />
            {
                message && <p className='text-violet-800'>{message}</p>
            }
            <button className='w-full mt-5 bg-violet-800 text-white hover:bg-red-500 font-medium py-3 rounded-md' type='submit'>Login</button>
        </form>
        <p className='my-5 italic text-sm text-center'>Don't have an account? <Link to="/register" className='text-red-600'>Register </Link>here.</p>
       </div>
    </section>
  )
}

export default Login
