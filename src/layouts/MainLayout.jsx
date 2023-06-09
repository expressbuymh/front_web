import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Main ({ children }) {
/*   const location = useLocation()
  if (['/Login', '/register'].includes(location.pathname)) {
    return <Outlet />
  } */
  return (
    <>

      <Navbar />
      {children}
      <Footer />

    </>
  )
}
