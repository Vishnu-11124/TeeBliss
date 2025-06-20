import React,{useState} from 'react'
import { Await, Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../redux/features/auth/authApi'

const Register = () => {

    
    const [message,setMessage] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');

    const [registerUser,{isLoading}] = useRegisterUserMutation();
    const navigate = useNavigate();

    const handleRegister = async (e) =>{
          e.preventDefault()
          const data = {
            username,
            email,
            password
          }
          try {
            await registerUser(data).unwrap();
            alert("Registration successfull.")
            navigate('/login')
          } catch (error) {
            setMessage("Registration failed.")
          }
    }

  return (
    <section className='h-screen flex items-center justify-center'>
       <div className='max-w-sm border shadow bg-white mx-auto p-8'>
        <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
        <form onSubmit={handleRegister} className='space-y-5 max-w-sm mx-auto pt-8'>
             <input onChange={(e) => setUsername(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3' type="text" name="username" id="username" placeholder='User Name' required />
            <input onChange={(e) => setEmail(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3' type="email" name="email" id="email" placeholder='Email Address' required />
            <input onChange={(e) => setPassword(e.target.value)} className='w-full bg-gray-100 focus:outline-none px-5 py-3' type="password" name="password" id="password" placeholder='Enter Password' required />
            {
                message && <p className='text-violet-800'>{message}</p>
            }
            <button className='w-full mt-5 bg-violet-800 text-white hover:bg-red-500 font-medium py-3 rounded-md' type='submit'>Register</button>
        </form>
        <p className='my-5 italic text-sm text-center'>Already have an account? <Link to="/login" className='text-red-600'>Login </Link>here.</p>
       </div>
    </section>
  )
}

export default Register
