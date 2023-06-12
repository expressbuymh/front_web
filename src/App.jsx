import { useEffect } from 'react'
import { Routes } from './router/Routes'
import { useDispatch } from 'react-redux'
import { LS } from './utils/localStorageUtils'
import authActions from './store/user/auth/authActions'
import menuActions from './store/menu/menuActions'
import { Toaster } from 'react-hot-toast'
const {get_menu} = menuActions
const { sign_in_token } = authActions
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_menu())
    let token = LS.get('token')
    if (token) {
      dispatch(sign_in_token())
    }
  }, [])
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Routes />
    </>
  )
}

export default App
