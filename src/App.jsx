import { useEffect } from 'react'
import { Routes } from './router/Routes'
import { useDispatch } from 'react-redux'
import { LS } from './utils/localStorageUtils'
import authActions from './store/user/auth/authActions'

const {sign_in_token} = authActions
function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    let token = LS.get('token')
    if(token){
      console.log("se hizo")
      dispatch(sign_in_token())
      console.log("que paso")
    }
  },[])
  return (
    <>
      <Routes/>
    </>
  )
}

export default App
