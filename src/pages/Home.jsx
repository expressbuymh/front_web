import { useDispatch, useSelector } from 'react-redux'
import Carrousel from '../components/Carrousel.jsx'
import actions from '../store/user/auth/authActions.js'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const { sign_out, clean_up } = actions

export function Home() {
  const dispatch = useDispatch()
  const { success } = useSelector(store => store.user.data)
  function handleClick() {
    dispatch(sign_out())
  }
  return (

    <>
      <div className='h-auto w-[100%] bg-bg-light pt-2 pb-16'>
        <div className='w-[100%] h-10 p-1 flex justify-center | lg:hidden'>
          <input type='text' className='text-center h-[100%] w-[100%] rounded | md:w-[90%]' placeholder='Search' />
        </div>
        <Link to="/products">
          Products
        </Link>
        <button onClick={handleClick}>Sign out</button>


      </div>
    </>

  )
}
