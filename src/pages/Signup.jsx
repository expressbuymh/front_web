import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import actions from '../store/users/actionsUser'

const { signup } = actions

function Signup () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const email = useRef()
  const name = useRef()
  const lastName = useRef()
  const password = useRef()
  const photo = useRef()

  function handleForm (e) {
    e.preventDefault()
    const data = {
      email: email.current.value,
      name: name.current.value,
      last_name: lastName.current.value,
      password: password.current.value,
      photo: photo.current.value
    }

    dispatch(signup(data))
    // falta ubicar las alertas con toast
    navigate('/login')
  }

  return (
    <>
      <div className='h-screen w-full flex flex-row justify-center relative'>
        <form onSubmit={(e) => handleForm(e)} className='w-[80%] h-full bg-white text-gray-800 flex flex-col px gap-2'>
          <label htmlFor=''>Email</label>
          <input className='border border-black px-4 py-2 rounded-md' type='text' placeholder='email' ref={email} />
          <label htmlFor=''>Name</label>
          <input className='border border-black px-4 py-2 rounded-md' type='text' placeholder='name' ref={name} />
          <label htmlFor=''>Last name</label>
          <input className='border border-black px-4 py-2 rounded-md' type='text' placeholder='last name' ref={lastName} />
          <label htmlFor=''>Password</label>
          <input className='border border-black px-4 py-2 rounded-md' type='text' placeholder='password' ref={password} />
          <label htmlFor=''>Photo</label>
          <input className='border border-black px-4 py-2 rounded-md' type='text' placeholder='url' ref={photo} />
          <input className='bg-gray-800 border border-black py-4 text-white text-center rounded-md font-semibold hover:bg-white hover:text-gray-800 cursor-pointer' type='submit' value='Sign Up' />

        </form>
      </div>
    </>
  )
}

export default Signup
