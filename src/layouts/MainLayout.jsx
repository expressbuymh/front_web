import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Main({ children }) {
  /*   const location = useLocation()
    if (['/Login', '/register'].includes(location.pathname)) {
      return <Outlet />
    } */
  return (
    <>
      <div className='w-screen h-screen flex flex-col'>
        <header>
          <Navbar />
        </header>
        <main className='grow'>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>


    </>
  )
}
