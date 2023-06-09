import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../store/users/actionsUser'

export default function FormLogin () {
  const dispatch = useDispatch()
  const emailR = useRef()
  const passwordR = useRef()

  function handleFormSubmit (e) {
    e.preventDefault()

    const email = emailR.current.value
    const password = passwordR.current.value

    const data = {
      email,
      password
    }
    console.log(data)
    dispatch(actions.signin(data))
  }
  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center'>
      <div>
        <label>Email</label>
        <input type='email' ref={emailR} />
      </div>
      <div>
        <label>Password</label>
        <input type='password' ref={passwordR} />
      </div>
      <button type='submit'>Sign In</button>
    </form>
  )
}
